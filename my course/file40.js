// SPREAD OPERATOR 



// HOW WE USE SPREAD OPERATOR IN ARRAYS 
const arr1 = [1,2,3];
const arr2 = [5,6,7];
const newArr = [...arr1,...arr2];
console.log(newArr);




// HOW TO USE SPREAD OPERATOR IN OBJECTS 
const obj1 = {
    key1: "value1",
    key2: "value2"
}
const obj2 = {
    key3: "value3",
    key4: "value4"
}

const newObj1 = {
    ...obj1,
    ...obj2
}
console.log(newObj1)



// USING SPREAD OPERATOR TO STORE ARRAY 
// KEY WILL BE ASSIGN BY DEFAULT 0,1,2,3,4 TO ARRAY DATA 
const newObj2 = {
    ...["item1","item2"]
}
console.log(newObj2)

