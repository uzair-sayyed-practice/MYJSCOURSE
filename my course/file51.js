// default parameters
// SUPPOSE WE WANT TO SET ONE FUNCTION PARAMETER BY DEFAULT SO WE CAN ADD IT

// here below we have two parameter a and b in which b contains value 2 by default

function addTwoNum(a,b = 2){
    return a + b ;
}

console.log(addTwoNum(2));


// Same example using if condition

function aAddb(a,b){
    if(a === undefined){
        a = 0;
    }
    else if(b=== undefined){
        b = 0;
    }

    return a + b;
}
console.log(aAddb(1,2))
console.log(aAddb(1))