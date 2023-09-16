const express=require("express");
const morgan=require("morgan");
const app=express();
const port=3000;
const apiVersion='/api/v1';

// if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"));
// };
//root route
app.get("/",(req,res)=>{
    // console.log(req.requestTime);
    // console.log("Root was reached");
    res.send(`ROOT ROUTE!`);
});


//grades route
const gradeRoute= require("./routes/gradeRoute");
app.use(`${apiVersion}/grade`,gradeRoute);

//student route
const gradeStudent=require("./routes/gradeStudent");
app.use(`${apiVersion}}/student`,gradeStudent);

//assignment route
const gradeAssignment=require("./routes/gradeAssignments");
app.use(`${apiVersion}/assignments`,gradeAssignment);


app.listen(port,()=>{
    console.log(`example app listening on port ${port}`);
});