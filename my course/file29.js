// How we can CLONE A Array

// Also How to concatenate two arrays 


// ##########traditional way to clone #########
// first copy paste but if it is big what will do?
let arr1 = ["item1","item2"];
/* let arr2 = ["item1","item2"];*/

//######## So another way to concat or clone######
/*let arr2 = arr1.slice(0).concat();
console.log(arr2);*/

// #########One more way called spread operator which is mostly used nowadays by developers and it is consider to be best and easy ###########
/*let arr2 = [...arr1];
console.log(arr1)*/

//#########We can joint as many arrays we want###
/*let arrExtra = ["item3","item4"];
let arr2 = [...arr1,...arrExtra];
console.log(arr2);*/


// ########### NOW WITH JOINING ARRAYS OR CLONNING WE CAN ADD NEW DATA TOO WHILE PERFORMING THIS ######

/*let arr2 = ["item3","item4"];
let arrExtraData = [...arr1,...arr2,"item5","item6"]
console.log(arrExtraData)*/


// traditional way or old method to join arrays + add some data 

/*let arrExtraData = arr1.slice(0).concat(["item3","item4"]);
console.log(arrExtraData);*/