// FUNCTION EXPRESSION 
// converting all normal functions of previous file to function expression

const singHappyBirthday = function(){
    console.log("Happy Birthday to You...");
}
singHappyBirthday();



// EVEN and ODD Checker 
const evenOdd = function(val){
    if(val%2==0){
        return true
    }
    else{
        return false
    }
}
const evenOddAns = evenOdd(2);
console.log(evenOddAns);



// SUM OF THREE NUMBERS in FUNCTION EXPRESSION 
const sumThreeNumbers = function(num1,num2,num3){
    return num1 + num2 + num3;
}
console.log(sumThreeNumbers(2,3,4));



// FINDING INDEX OF ARRAY DATA'S IF IT IS PRESENT IN ARRAY
const findTarget = function(array,target){
    for(i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
            break;
        }
    }
    return -1
}

const myArray = [1,2,3,4,5,6,87,34,0];
const findTargetAns = findTarget(myArray,34);
console.log(findTargetAns);


