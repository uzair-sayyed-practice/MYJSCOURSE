// and or operator



let firstName = "harshit";
let age = 17;

// if(firstName[0]=="H"){
//     console.log("Your name starts with H")
// }

// if(age >= 18){
//     console.log("you are above 18");
// }



// AND operator 

// if(firstName[0]=="H"&&age>=18){
//     console.log("Name start with H and age is above 18");
// }else{
//     console.count("Inside else");
// }

// OR operator 

if(firstName[0]=="H" || age >= 18){
    if(firstName[0]=="H"){
        console.log("Name starts with H");
    }
    else{
        console.log("Name not start with H")
    }
    if(age>= 18){
        console.log("Age is above 18");
    }
    else{
        console.log("age is not above 18")
    }
}
else{
    console.log("Age is not above 18 and Name not starts with H");
}