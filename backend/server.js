const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let data = require('./data/jobs');

// app.use(bodyParser({extended: true}))
app.use(bodyParser.json());

const api = express.Router();

api.get('/jobs', (req, res) => {
  res.json(data.jobs);
});

app.use('/api', api);

const port = 4201;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

