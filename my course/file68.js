// Map Data Structure 
// the Map object is a built-in data structure that allows you to store key-value pairs. Unlike Sets, which store only unique values, Maps allow you to associate values with specific keys. Each key-value pair in a Map is unique, and you can use various methods to access, modify, and iterate over the entries in the Map. Here's an introduction to working with Maps in JavaScript
// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects
// different between maps and objects
// objects can only have string or symbol as key 
// In maps you can use anything as key
// like array, number, string
// Map consider number as number only dont change it to string like object
// you can set objects and arrays as key in map 


// ############################################
// Example to create a Map()
const map = new Map();

// ############################################
// Example to add entries in a Map()
map.set("name","uzair");
map.set("age",25);
map.set("city","New York");
map.set(1,"ali");
map.set([1,2,3],"Sayyed");

// ############################################
// Example to see the size of Map 
console.log(map.size)

// ############################################
// Example to Access Value in Map 
console.log(map.get("name")) //output: uzair
console.log(map.get("age")) //output: 25

// ############################################
// Example to get all keys from map 
console.log(map.keys());
// Example to iteterate all keys using loop
for(let key of map.keys()){
    console.log(key, typeof key)
}

// ############################################
// Example to check value is present in map or not 
console.log(map.has("name")) //output: true
console.log(map.has("gender")) //output: false

// ############################################
// Example to remove entries from map 
map.delete("name")
console.log(map)//output: only age & city

// ############################################
// Example to iterate map 
// 1 using for of loop 
for(let [key,value] of map){
    console.log(key, value)
}

// 2 using forEach() method 
// forEach by default take first argument as a value then key when using with map
map.forEach((value,key)=>{
    console.log(key , value)
})




// ################################################
// MORE DEPTH EXAMPLE OR LOGICS 

const person1 = {
    id: 1,
    firstName: "harshit",
}
const person2 = {
    id:2,
    firstName:"Harshita",
}
// making person 1 obj as key for new map 

const extraInfo = new Map()
extraInfo.set(person1,{age: 18,gender: "male"});
extraInfo.set(person2,{age: 36,gender: "female"});
// console.log(person1.id);
console.log(extraInfo.get(person1).gender);//becoz it's map we use get
console.log(extraInfo.get(person2).age);//becoz it's map we use get

