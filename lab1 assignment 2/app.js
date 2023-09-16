//Student Name:Rishabh
//Student ID: 1224933294
//Date: 8/26/2023

const express=require("express");
const bodyParser=require("body-parser");
const path =require("path");


const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine",'ejs');
app.set('views',path.join(__dirname,"views"));

let students=[]


app.get('/studentForm',(req,res)=>{
   
    res.render("index",{students:students});
});
app.post('/StudentData',(req,res)=>{
  
    students.push(req.body);

    res.redirect('/studentForm');
});


app.listen(8080,()=>{
    console.log('server has started and is running on port 3000');

});