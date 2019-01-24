// server configuration
require('dotenv').config();

const PORT = process.env.PORT || 8000;

// create application
const express = require('express');
const app = express();
const cors = require('cors');

console.log('[Server] Application start...');

// connect to database
require('./data_source/mongodb_connect')();

// support json encoded bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// filters

app.use(cors());
app.use(express.static(__dirname + '/../src/assets'));
app.use(require('./filters/auth_controll_filter'));

console.log('[Server] filters load');

// routes
app.use('', require('./controllers/auth_controller'));
app.use('', require('./controllers/result_controller'));
app.use('', require('./controllers/model_controller'));

// start
app.listen(PORT, () => {
  console.log('[Server] started');
  console.log(`[Server] listen port :${PORT}`);
});

