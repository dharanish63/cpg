const express = require('express')
const router = express.Router()
let Colleges = require('../schemas/Colleges')


router.post('/', async(req, res)=>{
    try{
        const college = new Colleges(req.body)
        await college.save()
        res.status(201).send(college)
    }
    catch {
        res.status(500).send('something went wrong')
    }

})
module.exports = router;
