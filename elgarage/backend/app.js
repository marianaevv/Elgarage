const express = require("express");
const favicon = require('express-favicon');
const path = require('path');
const morgan = require("morgan");
const app = express();
const cors = require( './middleware/cors' );
const bodyParser = require("body-parser");
const router = require("./routes/routes");
app.use(cors);
app.use(bodyParser.json());
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(router);
module.exports = app; 