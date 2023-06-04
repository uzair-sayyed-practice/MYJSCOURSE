// Some() METHOD 
// The some() method is a higher-order function available for arrays in JavaScript. It allows you to check if at least one element in an array satisfies a given condition.

// #############################################
// Example to check if array contains atleast one or some even values if yes then output will be true else false 

let numbers = [1,2,3,4,5,6];
let hasEven = numbers.some((number)=>{
    return number%2===0;
})
console.log(hasEven);

// Example to check wether this array has atleast one or some negative values 
let hasNegative = numbers.some((number)=>{
    return number < 0;
})
console.log(hasNegative);


// ###############################################
// Example to check if a string array contains a specific substring 
let stringArr = ["uzair","naeem","wasim"];
let subStr = stringArr.some((subStr)=>{
    return subStr.includes("ee") //"na(ee)m"
})
console.log(subStr);


// ###########################################
// Example to check if an object array has an any specific value we want to know or it contains
let userData = [
    {userId:1,name:"hitesh",age:20},
    {userId:2,name:"mangesh",age:18},
    {userId:3,name:"sunil",age:21},
]
let chkSpecVal = userData.some((user)=>{
    return user.userId === 3
})
console.log(chkSpecVal)


// ############################################
// Example to check if array contains any truthy value 
let arr = [null,true,0,1,-1,undefined];
let truthy = arr.some((val)=>{
    return val>0
})
console.log(truthy)

// Example to check if array contains any falsy value 
let falsy = arr.some((val)=>{
    return val<0
})
console.log(falsy)