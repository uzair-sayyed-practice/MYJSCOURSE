// SPLICE() METHOD 
// start / delete / insert 
// The splice() method is a powerful array method in JavaScript that allows you to add, remove, or replace elements within an array. It modifies the original array and returns the removed elements as a new array.


// ########################################## 
// Example to remove some items from an array 
let num1 = [1,2,3,8,9,10];
let removedNum1 = num1.splice(3,2);
//explaination(startIndex,fromThereHowManyValueIncludingStartIndexToo,addNewValueRespectively)
console.log(removedNum1) //output:[8,9]



// ##########################################
// Example to add element or value 
let num2 = [1,2,3,7,8,9];

// i want to add two values after 3

num2.splice(3,0,1,1)//startIndex also inlude in this like index is 3 then just after it value will added 

// (strtIndex,0-ForNotremovingAnyVal,Newvalues,Newvalues)
console.log(num2)


// ###########################################
// Example to replace values in an array 
let num3 = [1,2,3,4,5,6]
// i want 4,5,6 to be 8,9,10
num3.splice(3,3,8,9,10)
// (startIndex,HowmanyValuesFromThatIndex,NewValtoReplaceThem)
console.log(num3)
output: [1,2,3,8,9,10]

// it is also removed like it is change with the value we provided we can store those removed data and print it 