const express = require('express')
const app = express();
const router = express.Router()
const path = require('path')
router.get('/',(req,res)=>{
    res.render('index.html',{title:'Main Page'})
})
module.exports = router;