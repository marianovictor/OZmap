const { Router } = require('express');
const express = require('express');

const routes = express.Router();

const PORT = process.env.PORT || 3000;
routes.get('/', (req, res) =>{
    return res.send(`Seu servidor esta rodando em http://localhost:${PORT}`)
});

routes.post('/user', (req, res) =>{
    console.log(req.body);

    return res.json({ok:true});
})


module.exports = routes;