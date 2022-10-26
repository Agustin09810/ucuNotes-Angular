var express = require('express');
var router = express.Router();

let id = 1;
let notes = {
  1: {text: "titulo", city_id: 1, date:"2022-10-24", hour:"20:00", temp:"18" }
}

/* GET notes listing. */
router.get('/', function(req, res, next) {
  res.json(notes)
});

/* GET note listing. */
router.get('/:noteid', function(req, res, next) {
  if (req.params.noteid in notes ) {
    res.status(200).send(notes[req.params.noteid])
  } else {
    res.status(404).send("Error in noteid")
  }
});

/* POST note listing. */
router.post('/', function(req, res, next) {
  let note = {};
  note.text = req.body.text;
  note.city_id = req.body.city_id;
  note.hour = req.body.hour;
  note.temp = req.body.temp;
  note.date = req.body.date;
  id++;
  notes[id] = note
  res.status(200).send(notes[id]);
});

/* PUT note listing. */
router.put('/:noteid', function(req, res, next) {
  const idNote = req.params.noteid;
  if (idNote in notes ) {
    let note = {};
    note.text = req.body.text;
    note.city_id = req.body.city_id;
    note.hour = req.body.hour;
    note.temp = req.body.temp;
    note.date = req.body.date;
    notes[idNote] = note
    res.status(200).send(notes[idNote])

  } else {
    res.status(404).send("Error in noteid")
  }
  
});



module.exports = router;
