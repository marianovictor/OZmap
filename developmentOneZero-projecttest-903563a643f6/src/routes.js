const { Router } = require('express');
const express = require('express');

const routes = express.Router();
const UserController = require('./controllers/UserController')

const PORT = process.env.PORT || 3000;
routes.get('/', (req, res) =>{
    return res.send(`Seu servidor esta rodando em http://localhost:${PORT}`)
});

routes.get('/users', UserController.index)
routes.post('/user', UserController.store)
routes.delete('/user/delete/:nome', UserController.delete)
routes.get('/users/:nome', UserController.buscaNome);


module.exports = routes;