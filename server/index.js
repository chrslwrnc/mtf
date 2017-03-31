'use strict';

const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
console.log('PATH2:', path.resolve(__dirname, '../dist/index.html'));
const index = (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html'));

app.use(compression());
app.use('/', express.static(path.resolve(__dirname, '../dist')));
app.get('*', index);
app.listen(process.env.PORT || 3000);
