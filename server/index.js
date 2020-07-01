const express = require('express');
const path = require('path');
const morgan = require('morgan');
// const Desc = require('../database/model.js'); // <- need?

const app = express();
const port = 3000;

app.listen(port, () => (console.log(`proxy listening at: http://localhost:${port}`)));