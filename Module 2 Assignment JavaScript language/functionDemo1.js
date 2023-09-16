var age=10;
var salary=15.00;

// console.log(`the variable datatype of age is ${typeof(age)}`);

// console.log(`the variable datatype of salary is ${typeof(salary)}`);

// var name='John Smith';
// console.log(`the variable datatype of name is ${typeof(name)}`);

const displayGreetings=function(name,year){
    console.log(`happy new year ${year} ${name}`);
}

// console.log(`the variable datatype of displayGreetings is ${typeof(displayGreetings)}`);

const displayGreetingsYAY=function(name,year){
    console.log(`happy new year ${year} ${name} !!!!`);}

const greet=function(name,year,func){
    func(name,year);
}

greet('SAM',2023,displayGreetingsYAY);
greet('RISHABH',2023,displayGreetings);