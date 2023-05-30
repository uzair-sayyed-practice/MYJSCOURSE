// DIFFERENCE BETWEEN DOT AND BRACKET NOTATION IN OBJECT 
// WE USE DOUBLE INVERTED COMA TO MAKE KEY IN TWO WORDS 
// TO ACCESS VALUE OF DOUBLE WORD KEY WE NEED SQUARE BRACKET [""]
 
const key = "email";
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar","sleeping","listening music"]
}

console.log(person["person hobbies"]);



// USING VARIABLE VALUE FOR MAKING KEY IN OBJECT 
person[key] = "harshitvashisth@gmail.com";
console.log(person)