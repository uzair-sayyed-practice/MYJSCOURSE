// HOISTING

// We can call nomal functions before declaring it 

// But in expression and arrow type of function we have to first declare function and then we can call that function

// NORMAL FUNCTION EXAMPLE
hello(); /*EXPECTED OUTPUT*/
function hello(){
    console.log("hello");
}


// FUNCTION EXPRESSION 
// check below function by executing line by line for better understanding

// helloo(); /*Error Output*/
const helloo = function(){
    console.log("helloo");
}
helloo(); /*Expected Output*/



// ARROW FUNCTIONS
// check below function by executing line by line for better understanding

hellooo(); /*Error Output*/ 
const hellooo = () => {
    console.log("hellooo");
}
hellooo(); /*Expected Output*/