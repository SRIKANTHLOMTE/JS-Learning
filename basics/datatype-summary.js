//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
console.log(heros[1]);
for (let index = 0; index < heros.length; index++) {
    let element = heros[index];
    console.log(element);
    
}

let myObj = {
    name: "hitesh",
    age: 22,                    
}
console.log(myObj.name);
console.log(myObj.age);


const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);//This is a called function
let college=function(){
    console.log("This is a college function");
    
}
college(); //This is a calling function
let my_name=Symbol("143")
console.log(my_name);
console.log(typeof(my_name));

// https://262.ecma-international.org/5.1/#sec-11.4.355555