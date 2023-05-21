// undefined
// null 

// let firstName;
// console.log(typeof firstName);
// firstName = "Uzair";
// console.log(typeof firstName);
// console.log(typeof firstName,firstName);


let myVar = null;
console.log(myVar)
console.log(typeof myVar)
myVar = "Uzair";
console.log(typeof myVar,myVar)

console.log(typeof null)


// BigInt 
// let myNum = 123;
// console.log(myNum);

// to check how many digit number u can safe in javascript safely
console.log(Number.MAX_SAFE_INTEGER);

// to save more than this we use big int 
let myNum = BigInt(123756756745682658246758432895783458);
// or
// let myNum = 146523877568746n 
console.log(myNum);

// we cannot use big int in any other data type to perform operation we need to use to use both big int 