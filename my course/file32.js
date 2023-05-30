// USING more types of loop in ARRAY 
// while loop

const fruits = ["apple","mango","grapes"];
const fruits2=[];
let i = 0;
/*
while(i<fruits.length){
    console.log(fruits[i])
    i++;
}
*/
// clonning or pushing array in while loop 
while (i<fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2)