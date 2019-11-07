const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')
const jwt = require('jsonwebtoken');

let data = require('./data/jobs');
let initialJobs = data.jobs;
let addedJobs = [];

const getAllJobs = () => {
  return [...addedJobs, ...initialJobs];
};

const fakeUser = {
  email: 'rhounkpe@yahoo.fr',
  password: 'Pa$$w0rd'
};

// app.use(bodyParser({extended: true}))
app.use(bodyParser.json());

app.use(cors());
/*app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});*/

const api = express.Router();

const auth = express.Router();

auth.post('/login', (req, res) => {
  if (req.body) {
    const email = req.body.email.toLocaleLowerCase();
    const password = req.body.password.toLocaleLowerCase();
    if (email === fakeUser.email && password === fakeUser.password) {
      delete req.body.password;
      res.json({
        success: false,
        data: req.body
      });
    } else {
      res.json({
        success: false,
        message: 'identifiant incorrects'
      });
    }
  } else {
    res.json({
      success: false,
      message: 'données manquantes'
    });
  }
});


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

api.get('/search/:term/:place?', (req, res) => {
  const term = req.params.term.toLowerCase().trim();

  let place = req.params.place;

  let jobs = getAllJobs().filter(
    job => (job.description.toLowerCase().includes(term) || job.title.toLowerCase().includes(term) ));

  if (place) {
    place = place.toLowerCase().trim();
    jobs = jobs.filter(
      job => (job.city.toLowerCase().includes(place))
    );
  }
  res.json({
    success: true,
    jobs
  });
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
app.use('/auth', auth)

const port = 4201;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

