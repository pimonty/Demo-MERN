

import morgan from 'morgan';

//mongodb
import mongoose from 'mongoose';

//express
var express = require('express');

//Within router define which database to consult, its controller and its model.
import router from './router';


// Initialize http server.
// Attention : Indicate port 8080 before uploading to heroku server. Locally put other different.
let app = express();
var port = process.env.PORT || 8084;


// Logger that outputs all requests into the console
app.use(morgan('combined'));


// Use v1 as prefix for all API endpoints
app.use('/v1', router);

//Testing other path
app.get('/static', function (req, res, next) {
  res.json([{id: 1}, {id: 1}]);
});

// Main screen, display a massage
app.get('/', (req, res) =>
  res.send('Hello World!')
)


const server = app.listen(port, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
  console.log(server.address().address);
  console.log(port);
});
