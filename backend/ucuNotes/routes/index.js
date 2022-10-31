const { json } = require('express');
var express = require('express');
var router = express.Router();
const app = express();


const apiRoute= "/api";
const currentVersion = "/v1";
let cities = {
  1: {name:"Montevideo", latitude: -34.9011, longitude: -56.1645},
  2: {name:"Lima",latitude:-12.0931,longitude:-77.0465},
  3: {name:"Santiago de Chile",latitude:-33.4691,longitude:-70.6420},
  
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
  res.json(cities[id]);
});

module.exports = router;

