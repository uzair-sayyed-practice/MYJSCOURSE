//  EVERY METHOD 
// The every() method is an array method in JavaScript that checks if all elements in an array meet a certain condition. It executes a provided callback function once for each element in the array until it finds an element that doesn't satisfy the condition. If all elements pass the condition, every() returns true; otherwise, it returns false. Here's the syntax for the every() method


// #####################################
// Example to check whether all values of array are even or not if it is odd it will return false and if even then it will return false
let numbers = [2,,4,6,8,10];
const allEven = numbers.every((number)=>{
    return number%2===0;
});
console.log(allEven)


// ######################################
// Example to Checking if all strings in an array have a length greater than 3
const words = ["apple","banana","mango","litchi"];
const allLongWords = words.every((word)=>{
    return word.length > 3;
})
console.log(allLongWords);


// ########################################
// Example to Verify all element in an array are truthy 
const values = [true,42,"hello",{}];
const allTruthy = values.every((value)=>{
    return Boolean(value);
})
console.log(allTruthy);


// #########################################
// Example to check all numbers in array are positive or not 
const allPositive = numbers.every((number)=>{
    return number > 0
})
console.log(allPositive)


// // ##########################################
// Example to check student data whether they are 18+ or not (data store in array and then object also this is some type of real world example)

const students = [
    {name: "Alice", age: 18},
    {name: "Suinchak", age: 21},
    {name: "Haashyuno", age: 20},
    {name: "Bobby", age: 22},
];
const above18 = students.every((student)=>{
    return student.age >= 18;
})
console.log(above18);