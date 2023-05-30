// FOR IN loop in array 
const fruits = ["apple","mango","grapes"];

for(let fruit in fruits){
    console.log(fruits[fruit]);
}

// performing more actions like push 
const fruits2 = [];
for (fruit in fruits){
    fruits2.push(fruits[fruit].toUpperCase());
}
console.log(fruits2);