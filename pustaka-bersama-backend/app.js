'use strict'

// init express

const express = require('express');
const app = express();
const cors = require('cors');

// Cors
let originOptionCors = {
    url: `http://localhost:${PORT}`
}

// Routing
const {router} = require('./router/router');

// Xpress.json
app.use(express.json());

// Parse request
app.use(express.urlencoded({extended: true}));

app.use('/', router);

// listen to PORT
app.listen(PORT, () => console.log(`Server Connected on ${PORT}`));
