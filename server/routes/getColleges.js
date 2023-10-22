const express = require('express')
const router = express.Router()
let Colleges = require('../schemas/Colleges')

router.get('/', async(req, res)=>{
    try{
        const response = await Colleges.find()
        res.json(response)
    }
    catch(err){
        res.status(500).send(`Error adding college: ${err.message}`);
    }

})
module.exports = router;