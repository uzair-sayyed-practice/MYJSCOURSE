// Using FOR OF loop in Array 
const fruits = ["apple","mango","grapes"];


// first fruit is type of varaiable in loop only which stores array value in it one by one
for(let fruit of fruits){
    console.log(fruit)
}


// performing more actions like push to another array 
fruits2 = [];
for(fruit of fruits){
    fruits2.push(fruit);
}
console.log(fruits2);