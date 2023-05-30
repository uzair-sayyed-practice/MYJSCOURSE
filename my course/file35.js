// DESTRUCTURING IN ARRAY 
// IMP TOPIC 

const myArray = ["val1","val2","val3","val4"];
let myVar1 = myArray[0];
let myVar2 = myArray[1];
console.log("value of myVar1 is ",myVar1);
console.log("value of myVar2 is ",myVar2);



console.log("USING SHORTCUT")

// performing same in one line 
let [myvar1,myvar2]= myArray
console.log("value of myvar1 is ",myvar1);
console.log("value of myvar2 is ",myvar2);

// here in left side myvar1 and myvar2 is exactly are variable
// In right side it is an array variable 
// this process will by default allot first value of myArray to myvar1 and same with my var2

// But what with remaining values of array ??
// like first and second values used by myvar1 and myvar2
// so for other values we can directly store them in array by doing this same just adding new things


let [var1,var2,...remainingValuesArr] = myArray;
console.log(var1)
console.log(var2)
console.log(remainingValuesArr);