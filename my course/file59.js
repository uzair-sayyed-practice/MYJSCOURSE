// The reduce() method in JavaScript is used to perform a specific operation on all elements of an array and return a single value as a result. It takes a callback function as an argument, which is called for each element in the array.


// ########################################## 
// TO GET A SINGLE OUTPUT FROM ARRAY LIKE ADDING ALL WE CAN USE REDUCE METHOD BY GIVING REDUCE METHOD A FUNCTION LOGIC THEN IT WILL STORE NEW VALUE DIFFERNETLLY
let numbers = [1,2,3,4,5];
const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
})
console.log(sum);
// More understandable of above code logic that what is actually happening

// accumulator, currentValue, return 
    //  1            2          3
    //  3            3          6
    //  6            4          10
    //  10           5          15


    // we can add 0 or any value to make it first accumulatorvalue for reduce method like it will be set some type of default 
    // to add default or first value by your own o reduce mthod we have to add it where callback function end in reduce method and before reduce method ends 
    
// ###########################################



// NOW REAL LIFE EXAMPLE OF TOTALLING ECOMMERCE CART ITEMS PRICE
// we have to set zero as a intitial value for first time iteration 
let userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

const total = userCart.reduce((totalPrice,currentValue)=>{
    return totalPrice + currentValue.price
},0)
console.log(total);

// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000


// #####################################################
// Finding the maximum value in an array using reduce method 

let num = [1,4,66,34,35,6,43,55,24];
let maxVal = num.reduce((accu,curr)=>{
    return Math.max(accu,curr);
})
console.log(maxVal);



// ########################################################
// Flattening an array of arrays 
// meaning from nested to making it plain or straight

let nestedArr = [[1,2],[3,4],[5,6]];
let flattenedArr = nestedArr.reduce((accu,curr)=>{
    return accu.concat(curr)
})
console.log(flattenedArr);