const express = require('express');
const app = express();
const ServerlessHttp = require('serverless-http');
const router = require('./routes/index.route');

router.get('/', (req, res) => {
    res.status(200).json({ status: true, message: 'Hello World!' });
});

app.use('/.netlify/functions/index', router);

module.exports.handler = ServerlessHttp(app);