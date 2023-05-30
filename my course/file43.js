// NESTED DESTRUCTURING 
const users = [
    {userId: 1,firstName: "harshit",gender: "male"},
    {userId: 2,firstName: "mohit",gender: "male"},
    {userId: 3,firstName: "nitish",gender: "male"},
]

// WE ARE DESTRUCTURING FROM ARRAY SO WE USE SQUARE []
// BY THE BELOW METHOD EACH OBJECT WILL ASSIGN TO EACH VARIABLE MADE IN THE LEFT SIDE 
const [user1,user2,user3] = users;
console.log(user1);
console.log(user2);



// DESTRUCTURING FROM ARRAY AND THEN FROM OBJECT 
// in below we are destructuring from each objects using keys of them it will assign respectively empty coma is for skipping

const[{firstName},,{gender}] = users;
console.log(firstName);
console.log(gender);




// changing the name of that keys we destructured from array and then object 
const[{firstName:user1firstName}, ,{gender: user3gender}] = users;
// now we cannot use the original key names we have to use user1firstName and user3gender to access them 
console.log(user1firstName);
console.log(user3gender);