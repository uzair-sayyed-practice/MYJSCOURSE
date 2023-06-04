// ITERABLES 
// JISPE HUM FOR OF LOOP LAGASAKE
// EXAMPLE : string and array are iterable

// #########################################
// EXAMPLE : let see can we use for of loop on string ?
let name = "uzair";
for(val of name){
    console.log(val)
}
// output : u , z , a , i ,r 
// Yes we can use for of loop on string so it's means string are iterable

// Example : let see can we use for of loop on array ?
let items = ['item1',"item2","item3"];
for(item of items){
    console.log(item)
}
// output : item1,item2,item3
// Yes we can use for of loop on array so it's means array are iterable




// #########################################
// ARRAY LIKE OBJECT 
// JINKE PASS LENGTH PROPERT HOTI HAI OR JISKO INDEX SE ACCESS KRSKTE H
// EXAMPLE : STRING 

const firstName = "uzair";
console.log(firstName.length)
console.log(firstName[1])

