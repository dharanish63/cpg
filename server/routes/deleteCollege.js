const express = require('express')
const router = express.Router()
let Colleges = require('../schemas/Colleges')

router.delete('/:id', async (req, res) => {
    try {
        const employee = await Colleges.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).send('College not found');
        }
        res.send('College deleted');
    } catch (err) {
        console.error(err);
    }
})

module.exports = router;