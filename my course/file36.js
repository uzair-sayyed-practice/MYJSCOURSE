// objects reference type 
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 

// ############# HOW TO CREATE OBJECTS ###############

const person = {
    name:"Harshit",
    age: 22,
    hobbies: ["guitar","sleeping","listening music"]
}

console.log(person);

// ######### HOW ACCESS DATA FROM OBJECTS ########## 

console.log(person["name"]);
console.log(person["age"]);
console.log(person["hobbies"]);
console.log(person.hobbies);
console.log(person.hobbies[2]);


// ############# HOW TO ADD KEY AND VALUE IN OBJECT ##########
person["surname"] = "vashisth"
console.log(person);