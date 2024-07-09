// Basic Function (syntax sort of formula)
function syntax() {
    console.log("this is fuction syntax");
}
syntax(); // syntax is define as arrangement of words & ...
//..phrases to create well-formed sentences in a language
//functions with parameter and Arguments
var myName = "Asadullah";
//myName: string //parameter
//"Asadullah"// Argument
function username(myName, sirName, age) {
    console.log(myName, sirName, age);
}
username("Asadullah", "Shafique", 48);
// // function Return keyword/type
function sum(Computer, Maths, Phys) {
    return Computer + Maths + Phys;
}
console.log(sum(73, 97, 71));
//Explicit typing means we mention type
//implicit typing, typescript infer the type automatically
// // function Default parameter
function calculate(a, b, c) {
    if (a === void 0) { a = 9; }
    if (b === void 0) { b = 7; }
    if (c === void 0) { c = 3; }
    return a + b + c;
}
console.log(calculate(7));
//optional parameter with condition
function movie(name, releaseYear) {
    if (releaseYear) {
        return "This movie name is ".concat(name);
    }
}
;
console.log(movie("Avengers", 2019));
// Rest parameters and spread operator
function box(name) {
    var eidi = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        eidi[_i - 1] = arguments[_i];
    }
    console.log.apply(console, eidi);
    return name + eidi;
}
console.log(box("Hajirah", 50, 100, 200, 700, 800, 600, 400, 5000));
// // Arrow Function
// //()=>{}
var gift1 = function (mygift) { return mygift; };
console.log(gift1("gold ring"));
//Anonymous function
//Immediately invoke function expression
//This function call itself immediately
(function (y) {
    console.log(y);
})("i am immediately invoked function");
(function (y, z) {
    console.log(y + z);
})(5, 6);
//This function automatically call  itself in parenthesis()
//Recursive function
//This function call from inside and outside
function myfunction(a) {
    if (a <= 1) {
        return 1;
    }
    else {
        return a * myfunction(a - 1);
    }
}
console.log(myfunction(5));
