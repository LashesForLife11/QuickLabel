const express = require('express');
const compression = require('compression');
const config = require('./config');

const port = config.server.port;
const app = express();

app.use(compression());
app.use(express.static('src/public'));

app.get('/favicon.*', (_, res) => {
  res.sendStatus(204);
});

app.get('*', (_, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port);

console.log('Frontend: http://localhost:' + port);
