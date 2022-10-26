var express = require('express');
var router = express.Router();

let cities = {
    1: {name: "Uruguay", cood: [-34,-56]}
}

router.get('/', function(req, res, next) {
    res.json(cities)
});

/* GET note listing. */
router.get('/:cityid', function(req, res, next) {
    if ( req.params.cityid in cities ) {
        res.status(200).send(cities[req.params.cityid])
    } else {
        res.status(404).send("Error in cityid")
}
});
module.exports = router;