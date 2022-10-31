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
        res.status(200).json(result);
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
      res.status(404).send({"error":"Error in noteid"})
    }
});

/* POST note listing. */
router.post('/', async function(req, res, next) {

  const dbConnect = getDb();
  const noteDocument = {
    text: req.body.text,
    city_id: req.body.city_id,
    hour : req.body.hour,
    temp : req.body.temp,
    date : req.body.date
  };

  await dbConnect
    .collection(collection)
    .insertOne(noteDocument, function (err, result) {
      if (err) {
        res.status(400).send("Error inserting note!");
      } else {
        console.log("Added a new note with id "+result.insertedId);
        res.status(200).send({ id: result.insertedId });
      }
    });
});

/* PUT note listing. */
router.put('/:noteid', async function(req, res, next) {

  const dbConnect = getDb();
  const noteQuery = { _id: ObjectId(req.params.noteid)};
  var updates = {};
  if (req.body.text) {
    updates.text = req.body.text;
  }
  if (req.body.date) {
    updates.date = req.body.date;
  }
  if (req.body.city_id) {
    updates.city_id = req.body.city_id;
  }
  if (req.body.hour) {
    updates.hour = req.body.hour;
  }
  if (req.body.temp) {
    updates.temp = req.body.temp;
  }

  await dbConnect
    .collection(collection)
    .updateOne(noteQuery, {$set: updates}, function (err, _result) {
      if (err) {
        res.status(400).send({"error":"Error updating note with id "+noteQuery._id+"!"});
      } else {
        console.log("1 document updated");
        res.status(200).send({"success":"Document note with id "+noteQuery._id+"was updated!"});
      }
    });
  
});

/* DELETE note listing. */
router.delete('/:noteid', async function(req, res, next) {
  const dbConnect = getDb();
  const noteQuery = { _id: ObjectId(req.params.noteid)};

  await dbConnect
    .collection(collection)
    .deleteOne(noteQuery, function (err, _result) {
      if (err) {
        res.status(400).send({"error":"Error deleting note with id "+noteQuery._id+"!"});
      } else {
        console.log("1 document deleted");
        res.status(200).send({"success":"Document note with id "+noteQuery._id+"was deleted!"});
      }
    });
  
});




module.exports = router;
