// server.js
// where your node app starts

const compression = require('compression');
const cors = require('cors');
const express = require('express');

const app = express();

// compress our client side content before sending it over the wire
app.use(compression());

// your manifest must have appropriate CORS headers, you could also use '*'
app.use(cors({ origin: 'https://trello.com' }));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.info(`Node Version: ${process.version}`);
  console.log('Trello Power-Up Server listening on port ' + listener.address().port);
  console.log(`Trello app-key: ${process.env.REACT_APP_TRELLO_APP_KEY}`);
});
