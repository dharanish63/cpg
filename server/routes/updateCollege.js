const express = require('express')
const router = express.Router()
let Colleges = require('../schemas/Colleges')

router.put('/:id', async (req, res) => {
    try {
        const college = await Colleges.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (!college) {
            return res.status(404).send('College not found');
        }
        res.send('College updated successfully');
    }
    catch (err) {
        console.error(err);
        res.status(500).send(`Error updating college: ${err.message}`);
    }

})
module.exports = router;