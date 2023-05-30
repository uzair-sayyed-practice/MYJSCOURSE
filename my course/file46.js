// ARROW FUNCTION
// CONVERTING FUNCTION EXPRESSION TO ARROW FUNCTION
// BOTH WORK SAME 



// ###############################################

// const singHappyBirthday = function(){
//     console.log("happy birthday to you.....");
// }
// singHappyBirthday();

const singHappyBirthday =() => {
    console.log("happy birthday to you.....");
}
singHappyBirthday();


// ##############################################

// const sumThreeNumbers = function(num1,num2,num3){
//     return num1 + num2 + num3;
// }
// console.log(sumThreeNumbers(1,2,3));

const sumThreeNumbers = (num1,num2,num3) =>{
    return num1+num2+num3
}
console.log(sumThreeNumbers(1,2,3));



// ###############################################
// const evenOdd = function(value){
//     if(value%2==0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(evenOdd(2))


const evenOdd = (value) => {
    if(value%2==0){
        return true
    }
    else{
        return false
    }
}
console.log(evenOdd(3))



// #################################################
// const firstChar = function(string){
//     return string[0]
// }
// console.log(firstChar("uzair"))

const firstChar = (string) => {
    return string[0]
}
console.log(firstChar("sayyed"));


// ##################################################
// const findTarget = function(array,target){
//     for(let i = 0;i<array.length;i++){
//         if(array[i]===target){
//             return i;
//             break;
//         }
//     }
//     -1
// }
// const myArray = [1,6,7,8,3,4,5,2]
// console.log(findTarget(myArray,6));

const findTarget = (array, target) => {
    for(let i = 0; i<array.length;i++){
        if(array[i]===target){
            return i;
            break;
        }
    }
    return -1
}
const myArray = [1,6,7,8,3,4,5,2];
console.log(findTarget(myArray,4));