'use strict';

const { diag, DiagConsoleLogger, DiagLogLevel } = require("@opentelemetry/api");
const { NodeTracerProvider } = require("@opentelemetry/node");
const { registerInstrumentations } = require("@opentelemetry/instrumentation");
const { HttpInstrumentation } = require("@opentelemetry/instrumentation-http");

const provider = new NodeTracerProvider();

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ALL);

provider.register();

registerInstrumentations({
  instrumentations: [
    new HttpInstrumentation(),
  ],
});