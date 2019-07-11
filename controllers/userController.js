const express = require('express');
const mongoose=require('mongoose');
const router = express.Router();

const User = mongoose.model('User');

router.get('/',(req,res)=>{
    res.render("users/profile",{
        viewTitle : "Insert User"
    });
});
module.exports = router; 