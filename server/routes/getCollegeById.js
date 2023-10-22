const express = require('express')
const router = express.Router()
let Colleges = require('../schemas/Colleges')

router.get('/:id', async (req, res) => {
    console.log(req.params.id)
    try {
        const college = await Colleges.findById(req.params.id)
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