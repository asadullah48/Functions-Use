// Basic Function (syntax sort of formula)
function syntax() {
  console.log("this is fuction syntax");
}
syntax(); // syntax is define as arrangement of words & ...
//..phrases to create well-formed sentences in a language

//functions with parameter and Arguments

let myName: string = "Asadullah";
//myName: string //parameter
//"Asadullah"// Argument

function username(myName: string, sirName: string, age: number) {
  console.log(myName, sirName, age);
}
username("Asadullah", "Shafique", 48);

// // function Return keyword/type

function sum(Computer: number, Maths: number, Phys: number) {
  return Computer + Maths + Phys;
}
console.log(sum(73, 97, 71));

//Explicit typing means we mention type
//implicit typing, typescript infer the type automatically

// // function Default parameter

function calculate(a: number = 9, b: number = 7, c: number = 3) {
  return a + b + c;
}

console.log(calculate(7));

//optional parameter with condition

function movie(name: string, releaseYear?: number) {
  if (releaseYear) {
    return `This movie name is ${name}`;
}};
console.log(movie("Avengers", 2019));

// Rest parameters and spread operator

function box(name: string, ...eidi: number[]) {
  console.log(...eidi);
  return name + eidi;
}
console.log(box("Hajirah", 50, 100, 200, 700, 800, 600, 400, 5000));

// // Arrow Function
// //()=>{}

let gift1 = (mygift: string) => mygift;

console.log(gift1("gold ring"));

//Anonymous function

//Immediately invoke function expression

//This function call itself immediately

(function (y: string) {
  console.log(y);
})("i am immediately invoked function");

(function (y: number, z: number) {
  console.log(y + z);
})(5, 6);

//This function automatically call  itself in parenthesis()

//Recursive function

//This function call from inside and outside
function myfunction(a: number): number {
  if (a <= 1) {
    return 1;
  } else {
    return a * myfunction(a - 1);
  }
}
console.log(myfunction(5));
