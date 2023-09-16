const express =require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("you have reached the get method grades");
});

router.post('/',(req,res)=>{
    res.send("you have reached the post method grades");
});

router.put('/',(req,res)=>{
    res.send("you have reached the put method grades");
});

router.delete('/',(req,res)=>{
    res.send("you have reached the delete method grades");
});

module.exports=router;