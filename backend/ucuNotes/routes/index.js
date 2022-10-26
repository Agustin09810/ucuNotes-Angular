const { json } = require('express');
var express = require('express');
const { isNotEmittedStatement } = require('typescript');
var router = express.Router();
const app = express();
const port = 3000;

const apiRoute= "/api";
const currentVersion = "/v1";
let cities = {
  1: {name:"Montevideo", latitude: -34.9011, longitude: -56.1645},
  2: {name:"Lima",latitude:-12.0931,longitude:-77.0465},
  3: {name:"Santiago de Chile",latitude:-33.4691,longitude:-70.6420},
}

let notes = {
  1: { title: "Note 1", content: "Content 1", city: 1},
  2: {title: "Note 2", content: "Content 2", city: 2},
  3: { title: "Note 3", content: "Content 3", city: 3}
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get(`${apiRoute}${currentVersion}/cities`, (req,res) => {
  res.json(cities);
});

app.get(`${apiRoute}${currentVersion}/cities/:id`, (req,res) => {
  const id = req.params.id;
  if(cities[id]){
    res.json(cities[id]);
  }
  else {
    res.status(404).json({error: "City not found"});
  }
});

app.delete(`${apiRoute}${currentVersion}/notes/:id`, (req,res) => {
  const id = req.params.id;
  if(notes[id]){
    delete notes[id];
    res.status(200).json({status: "ok"});
  }
  else{
    res.status(404).json({error: "Note not found"});
  }
});

app.get(`${apiRoute}${currentVersion}/notes/:id`, (req,res) => {
  const id = req.params.id;
  if(notes[id]){
    res.json(notes[id]);
  }
  else {
    res.status(404).json({error: "Note not found"});
  }
});

module.exports = router;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
