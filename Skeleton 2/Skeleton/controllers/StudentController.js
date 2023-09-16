const studentDB=[];
studentDB.push({id:1,name:"Rishabh",course:"cs572",grade:95});
studentDB.push({id:2,name:"Rishabh",course:"cs572",grade:95});
studentDB.push({id:3,name:"Rishabh",course:"cs572",grade:95});
studentDB.push({id:4,name:"Rishabh",course:"cs572",grade:95});
studentDB.push({id:5,name:"Rishabh",course:"cs572",grade:95});

exports.getStudent=function(req,res){
    res.send(studentDB);
    // res.render("studentView",{"title":'students'});
}
exports.createStudent=function(req,res){
    res.send("You have created the Student successfully");
}
exports.updateStudent=function(req,res){
    res.send("You have created the Student successfully");
}
exports.deleteStudent=function(req,res){
    res.send("You have created the Student successfully");
}