// function greetTheStudent(studentName){//name function
//     return `hello there! ${studentName}`;
// }


// //fat arrow function
// const greetTheStudent=function (studentName){ //anonymous function
//     return `hello there! ${studentName}`;
// }

// const greetTheStudent= (studentName)=>{ //arrow function
//     return `hello there! ${studentName}`;
// }

const greetTheStudent= studentName =>`hello there! ${studentName}`;

// const fullName= function (firstName,middleName,lastName){
//     return `${lastName}, ${middleName}. ${firstName}`;
// }


const fullName=(firstName,middleName,lastName)=> `${lastName}, ${middleName}. ${firstName}`;


// const studentName="Rishabh Singh";



// const greet=greetTheStudent(studentName);
// console.log(greet);

const titleName=fullName('Mary','R','Jane');
console.log(titleName);