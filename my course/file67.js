// SETS IN JS 
// a Set is a built-in object that allows you to store unique values of any type. It provides a collection of unique elements and ensures that each element appears only once in the Set. Here's an introduction to working with Sets in JavaScript
// store data 
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)


// ##########################################
// Creating a set 

const set1 = new Set();


// ###########################################
// adding value to it 
set1.add("apple");
set1.add("banana");
set1.add("mango");
console.log(set1) //output this three value in object


// ###########################################
// removing value from it 
set1.delete("banana");
console.log(set1) // output two values banana will be removed


// ###########################################
// check whether a specific data it has or not 
console.log(set1.has("apple")) //output: true
console.log(set1.has("banana")) //output: false 


// ###########################################
// check size of sets like l=we cehck length 
console.log(set1.size); // output : 2


// ###########################################
// Iterating sets using for of loop
for(setVal of set1){
    console.log(setVal); //output: apple mango
}

// Iterating using forEach
set1.forEach((setVal)=>{
    console.log(setVal); //output: apple mango
}) 


// ###########################################
// More example 
// check whether a element is present or not 
if(set1.has("apple")){
    console.log("It is present");
}else{
    console.log("It is not present");
}
// output : it is present 


// #############################################
// check length using your own logic
const myArray = [1,2,3,4,5,6];
const newSet = new Set(myArray)
let length = 0;

for(element of newSet){
    length++;
}
console.log(length); //output : 6