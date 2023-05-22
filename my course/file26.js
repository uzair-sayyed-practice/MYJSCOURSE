// intro to arrays 
// reference type 
// how to create arrays
// ordered collection of items 

let fruits = ["apple","mango","grapes"];
console.log(fruits);
let numbers = [1,2,3,4];
console.log(numbers);
let mixedArr = ["string",1,2,3,null,undefined];
console.log(mixedArr);
let object = {
    name:"uzair",
}
console.log(object);

// accessing specific data or items in array by its index number
console.log(fruits[1]);

// checking the type of data like string number array etc
// remember type of array shows object 
// and type of object also shows objects 
console.log(typeof fruits);


// to check in depth whether it is a array data type or objects we have a method coz both shows objects so we can get confused
// this method shows true if it is an actual array 
console.log(Array.isArray(fruits)) 
console.log(Array.isArray()) 
