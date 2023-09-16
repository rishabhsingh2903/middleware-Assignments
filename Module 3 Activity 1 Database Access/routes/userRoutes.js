const express =require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("you have reached the get method SALES");
});

router.post('/',(req,res)=>{
    res.send("you have reached the post method SALES");
});

router.put('/',(req,res)=>{
    res.send("you have reached the put method SALES");
});

router.delete('/',(req,res)=>{
    res.send("you have reached the delete method SALES");
});

module.exports=router;