var express = require('express');
var router = express.Router();

let notes = [
    { id: "1", text: "titulo", city_id: 1, date:"2022-10-24", hour:"20:00", temp:"18" }
]

/* GET notes listing. */
router.get('/', function(req, res, next) {
  res.json(notes)
});

/* GET note listing. */
router.get('/:noteid', function(req, res, next) {
  const noteSelected = notes.filter(item => item.id === req.params.noteid)
  if (noteSelected.length !== 0) {
    res.status(200).send(noteSelected)
  } else {
    res.status(404).send("Error in noteid")
  }
});

/* POST note listing. */
router.post('/', function(req, res, next) {
  let note = {};
  note.text = req.body.text;
  note.hour = req.body.hour;
  note.temp = req.body.temp;
  note.date = req.body.date;
  note.id = notes.length + 1;
  notes.push(note);
  res.status(200).send({ id: note.id });
});



module.exports = router;
