// FIND METHOD  
// The find() method is used to search through an array and retrieve the first element that satisfies a given condition. It takes in a callback function as an argument, which should return true or false based on the condition you want to check.



// ###############################################
// Example of find method to get the first even value from an array 

let numbers = [1,3,6,4,7];
let ans = numbers.find((number)=>{
    return number%2===0;
})
console.log(ans);


// ##############################################
// Example to get the first word in array of three character 
// whichever word comes first and of three character will be taken by find method 

let charcaters = ["uzair","shiv","Joe","Jon"];
let charAns = charcaters.find((char)=>{
    return char.length===3
})
console.log(charAns);

// ###############################################
// Real Life example using find method 
// You have lots of user data with their id an u want to know the user data of a user who's userId is 3

let users = [
    {userId:1,userName: "shivan"},
    {userId:2,userName: "vinod"},
    {userId:3,userName: "shukla"},
    {userId:4,userName: "vimlesh"},
]

let usersAns = users.find((user)=>{
return user.userId===3;
})

console.log(usersAns);