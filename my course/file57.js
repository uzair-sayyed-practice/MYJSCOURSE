// Map method 
// It creates new array for existing array and does not affect the original array 
// We use this map method when suppose we want square numbers of whole original array so we can perform this task and get the square numbers of whole array in a new array created at a time of using map method 

// ******* SQUARE ROOT EXAMPLE *******
// let numbers = [1,2,3,4,5];
// const squareNumber = numbers.map((number)=>{
//     return number * number;
// });
// console.log(squareNumber);
  
// ******* same but normal function *******
// let numbers = [1,2,3,4,5];
// const squareNumber = numbers.map(function(number){
//     return number * number;
// });
// console.log(squareNumber);


// ******* same but using function excluded *******
// let numbers = [1,2,3,4,5];
// let squareNumberFunc = function(number){
//     return number * number ;
// }
// const squareNumber = numbers.map(squareNumberFunc);
// console.log(squareNumber);



// ########## Some more example ##########
// now we have array and in that objects data every objects contains user information likle names gender etc so we want all users firstName in a new array using map method

let users = [
    {firstName:"Uzair",gender:"male",age:16},
    {firstName:"Harshit",gender:"male",age:24},
    {firstName:"Mritul",gender:"male",age:30},
]

const userFirstName = users.map((user)=>{
    return user.firstName;
})
console.log(userFirstName);