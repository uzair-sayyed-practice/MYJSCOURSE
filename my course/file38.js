// ############# HOW TO ITERATE OBJECTS #############

const person = {
    name: "Harshit",
    age:22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// USING FOR IN LOOP 

for(let key in person){
    console.log(`${key} : ${person[key]}`);
    console.log(key, " ", person[key]);
}

console.log(typeof person)
console.log(Array.isArray(person));



// USING FOR OF LOOP 

for(let key of Object.keys(person)){
    console.log(person[key]);
}