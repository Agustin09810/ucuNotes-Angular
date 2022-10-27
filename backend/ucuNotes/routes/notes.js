var express = require('express');
const { ObjectId } = require('mongodb');
const { getDb } = require('../server/db/conn');
var router = express.Router();

let collection = "NoteCollection"


/* GET notes listing. */
router.get('/', async function(req, res, next) {
  dbo = getDb()
  await dbo
    .collection(collection)
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching notes!");
    } else {
        res.json(result);
      }
    });
});

/* GET note listing. */
router.get('/:noteid', async function(req, res, next) {
  
  dbo = getDb()
  const noteBD = 
  await dbo
    .collection(collection)
    .findOne({ _id: ObjectId(req.params.noteid) })
    if (noteBD !== null) {
      res.status(200).send(noteBD)
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
  notes[id] = note;
  res.status(200).send({id: id, note: notes[id]});
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
    notes[idNote] = note;
    res.status(200).send(notes[idNote])

  } else {
    res.status(404).send("Error in noteid")
  }
  
});



module.exports = router;
