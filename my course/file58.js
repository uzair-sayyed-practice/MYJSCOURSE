// FILTER METHOD 
// The filter method in JavaScript is used to create a new array by filtering out elements from an existing array based on a specified condition. It allows you to selectively keep or exclude elements from the original array based on whether they meet the condition you provide.


// ########Now suppose we want remove all even values from array !!########

let number = [1,2,3,4,5,6,7,8,9,10];
const evenFilter = function(num){
    if(num%2===0){
        return num;
    }
}
const evenArray = number.filter(evenFilter);
console.log(evenArray) 


// ########## now for odd ######### 

const oddFilter = function(num){
    return num % 2 !== 0;
}
const oddArray = number.filter(oddFilter);
console.log(oddArray);