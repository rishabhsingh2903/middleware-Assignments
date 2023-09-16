var students=[];

var student={
    name:'Rishabh Singh',
    birthYear:2000,
    course:"middleware programming",
    grade:"A+",
    active:true,
    age: function(){
        if (this.active){
            return new Date().getFullYear()-this.birthYear;
        }
        else{
            return 0;
        }
    }
}

var student2={
    name:'Harsh Singh',
    birthYear:2002,
    course:"middleware programming",
    grade:"A+",
    active:false,
    age: function(){
        if (this.active){
            return new Date().getFullYear()-this.birthYear;
        }
        else{
            return 0;
        }
    }
}

students.push(student);
students.push(student2);
console.log(students);
// console.log(student['name']);
// console.log(student.name);
// console.log(student.age());
// console.log(student2.age());
students.forEach(item=>console.log(item.age()));