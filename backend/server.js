const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let data = require('./data/jobs');
let initialJobs = data.jobs;
let addedJobs = [];

const getAllJobs = () => {
  return [...addedJobs, ...initialJobs];
};


// app.use(bodyParser({extended: true}))
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const api = express.Router();

api.get('/jobs', (req, res) => {
  // res.json(data.jobs);
  res.json(getAllJobs());
});

api.post('/jobs', (req, res) => {
  const job = req.body;
  console.log(job);
  addedJobs = [job, ...addedJobs];
  console.log('total number of jobs: ', getAllJobs().length);
  res.json(job);
});

api.get('/jobs/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const jobs = getAllJobs().filter(j => j.id === id);

  if (jobs.length === 1) {
    res.json({
      success: true,
      job: jobs[0]
    });
  } else {
    res.json({
      success: false,
      message: `pas de job ayant pour id ${id}`
    });
  }
});

app.use('/api', api);

const port = 4201;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

