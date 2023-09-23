const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.json());
const students=[];

const changeName=(req,res,next)=>{
    const student=req.body;
    if(req.body.fname==undefined || req.body.mname==undefined || req.body.lname==undefined){
        return res.send("please enter a valid name");
    }
    req.body.fname=student.fname.toUpperCase();
    req.body.mname=student.mname.toUpperCase();
    req.body.lname=student.lname.toUpperCase();
    next();
}

const checkAdmin=(req,res,next)=>{
    if(req.query.admin=="true"){
        next();
    }else{
        res.status(400).send("should be admin");
    }
};

app.use(changeName);
const getSpecificStudent=(req,res)=>{
    const id=req.params.id;
    const currentStudent=students[id];
    if (currentStudent==undefined){
        res.send(`student with the ${id} is not found`);
    }
    res.send(`student with the ${id} is ${currentStudent.fname} ${currentStudent.mname} ${currentStudent.lname}`);
}

const getStudents=(req,res)=>{
    res.send(students);
}

const addStudent=(req,res)=>{
    const student=req.body;
    students.push(student);
    res.send(`student with the name ${student.fname} ${student.mname} ${student.lname} added to the database`);
}

const updateStudent=(req,res)=>{
    const id=req.params.id;
    const student=req.body;
    students[id]=student;
    res.send(`student with the ${id} has been updated`);
};


const deleteStudent=(req,res)=>{
    const id =req.params.id;
    const student=students[id];
    students.splice(id,1);
    res.send(`student with the id ${id} has been deleted`);
};
app.get("/students/:id",getSpecificStudent);
app.get("/students/",getStudents);
app.post("/students/",addStudent);
app.put("/students/:id",updateStudent);
app.delete("/students/:id",checkAdmin,deleteStudent);

app.use("/",function(req,res,next){
    console.log("request Url: "+req.url);
    res.send("Hello");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
