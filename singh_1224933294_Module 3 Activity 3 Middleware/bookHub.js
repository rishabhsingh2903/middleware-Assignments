const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.json());
books=[]
const logInfo=(req,res,next)=>{
    const timestamp = new Date().toISOString(); 
    const method = req.method; 
    const url = req.originalUrl; 


    console.log(`[${timestamp}] ${method} ${url}`);

    next();
};

const checkAuth=(req,res,next)=>{
    if (req.query.auth==='true'){
        return next();
  
    }else{
        res.send("not Authorized");
    }
};


app.use(logInfo);

app.get("/",(req,res)=>{
    res.send("welcome to bookHub");
});

app.post("/cart/add",checkAuth,(req,res)=>{
    const book=req.body;
    // console
    // books.push(book.name);
    res.send(`book with the name ${book.name} added to the database`);
})

app.delete("/cart/remove/:id",checkAuth,(req,res)=>{
    const id=req.params.id;
    books.splice(id,1);
    res.send(`deleted the book with id ${id}`);
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
