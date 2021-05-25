const express = require('express')
const app = express()
const port = 3000
const otel = require('@opentelemetry/api')
const got = require('got')

app.get('/', (req, res, next) => {
  console.log('Tracer - Context Injection Middleware')

  otel.context.with(
    otel.setBaggage(
      otel.context.active(),
      otel.createBaggage({
        'dd-context': { value: 'custom dd-context' },
      })
    ),
    () => {
      console.log('Updated baggage:', otel.getBaggage(otel.context.active()))
      next()
    }
  )
})

app.get('/', async (req, res) => {
  const response = await got('http://localhost:4000')
  res.send(response.body)
})

app.listen(port, () => {
  console.log(`Tracer app listening at http://localhost:${port}`)
})