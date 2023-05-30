// BLOCK SCOPE VS FUNCTION SCOPE 
// let and const are block scope 
// var is function scope 


// ########## CONST #########
// {
//     const name = "uzair";
//     console.log(name); //expected output
// }
// console.log(name); // cant access const out of the block 

// ########## LET ##########
// {
//     let name = "uzair";
//     console.log(name); //expected output
// }
// console.log(name); // cant access let out of the block 

// ########## VAR ##########
// {
//     var name = "uzair";
//     console.log(name); //expected output
// }
// console.log(name); // can access VAR out of the block also 




// ##########################################################
// VAR CAN ACCESSED FROM ANY WHERE IN FILE INSIDE BLOCK OR FROM OUTSIDE OF THE BLOCK 

// if(true){
//     var firstName = "Uzair";
//     console.log(firstName)
// }
// console.log(firstName);


function myApp(){
    if(true){
        var firstName = "Uzair";
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();