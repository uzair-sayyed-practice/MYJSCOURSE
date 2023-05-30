// function singHappyBirthday(){
//     console.log("happy birthday to you....");
// }
// singHappyBirthday()



// FUNCTION TO SUME THREE NUMBERS 
// function sumThreeNumbers(number1, number2, number3){
//     return number1 + number2 + number3;
// }

// let result = sumThreeNumbers(2,3,3);
// console.log(result);
// console.log(sumThreeNumbers(2,2,2));




// CHECK WHETHER A NUMBER IS EVEN OR FALSE 
// // IF IT IS EVEN VALUE WILL BE TRUE AND IT IS ODD VALUE WILL BE ODD 
// function evenOdd(value){
//     if(value%2===0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(evenOdd(4));



// // FUNCTION TO RETURN FIRST CHARACTER OF A STRING WE PASS TO THE FUNCTION 
// function firstChar(value){
//     return value[0];
// }
// console.log(firstChar("uzair"));



let arr = [1,3,6,2,7,87];
function findTarget(array,target){
        for(let i = 0;i<array.length;i++){
            if(arr[i]===target){
                return i
            }
        }
        return -1
}

const ans = findTarget(arr,6);
console.log(ans);