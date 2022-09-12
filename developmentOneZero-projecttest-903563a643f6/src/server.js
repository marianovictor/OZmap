const { expect } = require('chai');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();
mongoose.connect('mongodb+srv://RochaVictor:Senha1234@cluster0.ndbikqh.mongodb.net/test')
const PORT = process.env.PORT || 3000;

server.use(express.json());
server.use(routes);

server.listen(PORT);

module.exports = server;