const express = require('express');
const routes = require('./routes');
const router = require('./routes');

const server = express();
const PORT = process.env.PORT || 3000;

server.use(routes);

server.listen(PORT);