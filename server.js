const express = require('express');
const path = require('path');
const morgan = require('morgan');
const Desc = require('../description/database/model.js'); // <- need?

const proxy = express();
const port = 3000;

const description = express();
const descriptionPort = 3006

const photos = express();
const photosPort = 3009

const pledges = express();
const pledgesPort = 3003;

proxy.use(express.static(path.join(__dirname, './public')));

description.use(express.static(path.join(__dirname, '../description/public')));

proxy.use(morgan('tiny'));

proxy.get('/', (req, res) => res.send('Hello Proxy!'))
proxy.listen(port, () => (console.log(`proxy listening at: http://localhost:${port}`)));

description.get('/', (req, res) => res.send('Hello Description!'))
description.listen(descriptionPort, () => (console.log(`description listening at: http://localhost:${descriptionPort}`)));

photos.get('/', (req, res) => res.send('Hello Photos!'))
photos.listen(photosPort, () => (console.log(`photos listening at: http://localhost:${photosPort}`)));

pledges.get('/', (req, res) => res.send('Hello Pledges!'))
pledges.listen(pledgesPort, () => (console.log(`pledges listening at: http://localhost:${pledgesPort}`)));


// returns all description data
description.get('/api/description', (req, res) => {
  Desc.find((err, desc) => {
    res.send(desc);
  });
});

// returns description at id
description.get('/api/description/:id', (req, res) => {
  Desc.find({ id: req.params.id}, (err, desc) => {
    res.send(desc);
  });
});

