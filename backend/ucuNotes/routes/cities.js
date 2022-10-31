var express = require("express");
const { getDb } = require("../server/db/conn");
var router = express.Router();

const collection = "CityCollection";

/* GET notes listing. */
router.get("/", async function (req, res, next) {
  dbo = getDb();
  await dbo
    .collection(collection)
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching cities!");
      } else {
        res.status(200).json(result);
      }
    });
});

router.get("/:cityid", async function (req, res, next) {
  dbo = getDb();
  const noteBD = await dbo
    .collection(collection)
    .findOne({ _id: ObjectId(req.params.cityid) });
  if (noteBD !== null) {
    res.status(200).send(noteBD);
  } else {
    res.status(404).send("Error in cityid");
  }
});

module.exports = router;
