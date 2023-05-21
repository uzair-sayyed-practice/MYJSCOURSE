// nested if else 

// winning number 19
// 19 your guess is right 
// 17 too low 
// 20 too high 


let winNum = prompt("Guess a number");

if(winNum == 19){
    console.log("Your guess is right");
}
else{
    if(winNum>19){
        console.log("Your guess is high");
    }
    else{
        console.log("Your guess is low");
    }
}