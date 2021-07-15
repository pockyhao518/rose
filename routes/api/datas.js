const express = require("express");
const router = express.Router();
const Data = require("../../models/Data")

router.get('/', (req, res) => {
    Data.find()
        .then(datas => res.json(datas))
        .catch(err => res.status(404).json({ notasksfound: 'No Data found' }));
});

module.exports = router;