const express = require('express');
const path = require('path');
const morgan = require('morgan');

// PROXY
const proxy = express();
const port = 3001;

proxy.use(morgan('combined'));

proxy.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

proxy.use(express.static(path.join(__dirname, './public')));

proxy.listen(port, () => (console.log(`proxy listening at: http://localhost:${port}`)));
