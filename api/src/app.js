const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const errorHandlers = require('./Utils/middlewares/errorHandlers');
const setHeaders = require('./Utils/middlewares/setHeaders');

require('./Models/index')

const routes = require('./Routes/index.js');

const server = express();
server.name = "API"

server.use(bodyParser.urlencoded({ extended: true, limit:"50mb " }));
server.use(bodyParser.json({limit:"50mb"}));
server.use(cookieParser());
server.use(cors());
server.use(morgan('dev'));
server.use(setHeaders);
server.use(errorHandlers)

server.use('/api', routes)

module.exports = server;