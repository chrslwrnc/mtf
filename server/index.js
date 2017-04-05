'use strict';

const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
const index = (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html'));

app.use(compression());
app.use('/', express.static(path.resolve(__dirname, '../dist')));
app.get('*', index);
app.listen(process.env.PORT || 3000);
