// Rest Parameter 
// Suppose we have so many values but in function parameter there only three parameter so we can make one parameter like last one as rest parameter using three dots before it so the remaining value will by default add in to the last parameter and the first two value value will assign to the first two parameter

function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myFunc(1,2,3,4,5,6,67,7);


// USING REST PARAMETER FEATURE TO ADD ALL NUMBERS 

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
const ans = addAll(1,2,3,4,5,6,7,8,9,10);
console.log(ans)