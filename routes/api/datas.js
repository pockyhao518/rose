const express = require("express");
const router = express.Router();
const Data = require("../../models/Data")

router.get('/', (req, res) => {
    Data.find()
        .then(datas => res.json(datas.reverse()))
        .catch(err => res.status(404).json({ notasksfound: 'No Data found' }));
});

router.get('/:id', (req,res) => {
    Data.findById(req.params.id)
    .then(data => res.json(data))
        .catch(err => res.stats(404).json({ notasksfound: 'No Data found by ID' }))
})
module.exports = router;