// IMPORTANT ARRAY METHODS 
// forEach Method 

// Now suppose we want a input from an array data's with index of each data's also the the main value of that index we want to perform multplication with 2 of that main value 
// So here we will use function and traditional loop to perform this logic  

let numbers = [2,4,6,8];
const multiplyByTwo = function(number,index){
    console.log(`Index is ${index}`);
    console.log(`${number}*2 = ${number*2}`);
}
multiplyByTwo(numbers[0],0)

// From the above code we have to call each time that function for each data so we can do it one time using traditional for loop  

for(i=0;i<numbers.length;i++){
    multiplyByTwo(numbers[i],i);
}
// So the above for loop logic is more convenient because if we have long data's in array so we can use for loop to execute this logic at once rather than calling each one by one 



//############ Now MAIN THINGS ARRIVED HERE 
// we are taking index and its value by writing and specifying all things manaually so we can do this automatically like there is a method call forEach method which will perform this task fro us like loop task ######
// LET'S SEE AN EXAMPLE ---> 

let num = [1,2,3,4,5,6,7,8];
// Now we want to know the above array data and it's index 
// So we will write the same function as above but little short 

const myFunc = (number,index) => {
    console.log(`The number is ${number} and Index is ${index}`);
}
// Now just pass this two using foreach method 

num.forEach(myFunc);

// So it is taking the data like index and its value by its own we don't have to tell the index specifically or to use loop to tell the code that this is index and this is the value
// FOREACH METHOD IS PERFORMING THIS ALL TASK JUST USING FUNCTION LOGIC 




// ######## NOW DOING MORE SHORT THIS WHOLE LOGIC #########

// let NUM = [1,4,3,7,2];
// NUM.forEach(function(number,index){
//     console.log(`number is ${number} and index is ${index}`)
// })


// ############################################################################################
// REMEMBER WITH THE HELP OF FOREACH METHOD THE FOREACH BY DEFAULT ADD FIRST ARGUMENT TO THE FUNCTION PARAMETER AS VALUE AND TO THE SECOND PARAMETER FOREACH ADDS THE INDEX OF IT 

// example:
// let num = [2,4,1,3]
// num.forEach(function(number,index){
//     console.log(number,index)
// })

// SO ABOVE THE FOREACH WILL PASS NUM ARRAY VALUE TO THE FUNCTION AND GOES REPEATING LIKE LOOP UNTILL THE ARRAY DATA ENDS

// SO HOW FOREACH WORKS :
// forEach(VALUE,INDEX) 
// ############################################################################################


let NUM = [1,2,3,4,5];
NUM.forEach(function(value,index){
    console.log(`${value}*2 = ${value*2}`)
    console.log(`index is ${index}`)
})


//######## REAL LIFE EXAMPLE ###########

let users = [
    {firstName:"Harshit",gender: "male"},
    {firstName:"aman",gender: "male"},
    {firstName:"junaid",gender: "male"},
    {firstName:"garima",gender: "female"},
]

users.forEach(function(user){
    console.log(user.firstName)
})

// same above thing using for of loop
for(let user of users){
    console.log(user.firstName)
} 