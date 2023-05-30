// FUNCTION RETURNING FUNCTION 

function myFunc(){
    function hello(){
        return "Hello there"
    }
    return hello;
}


// THE FUNCTION RETURNING WHOLE HELLO FUNCTION INSIDE IN IT SO WE STORE IT IN CONST ANS TO GET THE RETURN VALUE OF HELLO FUNCTION INSIDE MYFUNC
const ans = myFunc();
console.log(ans());