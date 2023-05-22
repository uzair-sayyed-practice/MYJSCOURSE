// primtive vs reference data types 

let num1 = 6;
let num2 = num1;
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);

// after increment see the difference 

num1++;
console.log("Ater incrementing num1");
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);

// num1 will get 7
// but num2 will remain 6 
// In above line only num1 will get affected by incrementing 
// num2 will not increased because it is taking data from address of num1 previous one
// THIS IS KNOWN AS PRIMITIVE DATA TYPE 


// reference data type 

let arr1 = ["item1","item2"];
let arr2 = arr1;
console.log("arr1 is ", arr1);
console.log("arr2 is ", arr2);
// till now both are same 

// now will make changes in arr1 and will see if any changes happen in arr2

arr1.push("item3");
console.log("after pushing element to array 1 only and not arr2");
console.log("arr1 is ", arr1);
console.log("arr2 is ", arr2);


// so like primitive data types where only the actual one changing after making any changes

// But here in array it we changing arr1 only but aar2 is also getting updated from arr1 value this is bcoz the address for both is same 