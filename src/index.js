'use strict';

const App = require('./app');

const application = new App();
const shutdown = () => application.stop();

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

application.start();
