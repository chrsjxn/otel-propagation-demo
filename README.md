# otel-propagation-demo

Demo project to test opentelemetry context propagation across multiple services.

To run the demo:
```
npm i
npm start
```

Then visit `http://localhost:3000` in your browser. The `tracer` service should set a custom Baggage, and the `logger` service should receive it as a header.

Requires node 10+
