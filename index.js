/* INDEX DE APIBOOKS */
const express = require('express');
const nocache = require('nocache');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const morgan = require('morgan');

const config = require('./config');

const api = require('./api');
const app = express();

app.use(nocache());
app.use(express.json());
//app.use(jwt());
//app.use(bcrypt());

app.use('/api',api);

app.listen(config.port, ()=>{
    console.log('Servidor iniciado ...');
});
        