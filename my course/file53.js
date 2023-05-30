// PARAM DESTRUCTURING 
// Object
// REACT 


const person = {
    firstName: "uzair",
    gender: "male"
}

function printDetails(obj){
    console.log(obj.firstName);
    console.log(obj.gender);
}
printDetails(person);

// function printDetails({firstName,gender}){
//     console.log(firstName);
//     console.log(gender);
// }
// printDetails(person);