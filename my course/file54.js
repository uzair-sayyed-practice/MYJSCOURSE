// CALLBACK FUNCTION 

function myFunc(name){
    console.log("hello there")
    console.log(`my name is ${name}`)
}
function myFunc2(callback){
    console.log("Hello there and i'm calling my func inside me by taking it as a input in my parameter");
    callback("uzair");
}

myFunc2(myFunc)