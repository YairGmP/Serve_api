const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('User api ok')
})

router.get("/update",function(req, res) {
    res.send("User actualizado");
})


module.exports = router;