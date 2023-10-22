const express = require('express')
const router = express.Router()
let Colleges = require('../schemas/Colleges')

router.get('/:location/:course', async (req, res) => {
    console.log(req.params.search)
    try {
        const college = await Colleges.find({"city": req.params.location});
        //const college = await Colleges.find({ $or: [ { "city": req.params.location, "courses":  req.params.course }] });
        if (!college) {
            return res.status(404).send('College not found');
        }
        res.json(college);
    }
    catch (err) {
        console.error(err);
        res.status(500).send(`Error updating college: ${err.message}`);
    }

})
module.exports = router;