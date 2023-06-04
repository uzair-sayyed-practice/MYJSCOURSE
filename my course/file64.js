// FILL METHOD 
// The fill() method is a built-in method in JavaScript that allows you to fill elements of an array with a specific value. It modifies the original array in place and returns the modified array. Here's the basic syntax of the fill() method

// ################################
// Example to create an array and fill with a value accoding to your length of the array 

const arr = new Array(5)
arr.fill(0)
console.log(arr)
// output [0,0,0,0,0]

// Example to change the above array of zero from specific portion of it using index and replacing it with different value 

arr.fill(1,2,4);
// syntax means:
// (yourValue,startIndexd,endIndex)
console.log(arr)
// output: [0,0,1,1,0]
