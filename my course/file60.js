// SORT METHOD 
// Remember it change the original data which u use 
// It sort strings like a dictionary we see like a first b second and so on. But it not sort numbers correctly like we need to pass a short function in it that's it.

// ################################################
// Example : Sorting Words 
let words = ["b","d","a","c"];
words.sort();
console.log(words);

// ################################################
// Example : Sorting Numbers 
let numbers = [3,42,56,2,10];
numbers.sort();
console.log(numbers);
// OUTPUT [10,2,3,42,56];
// Not sorted what we want becoz sort method assuming numbers as a strings and sorting it using ascii value of each number. in 2 digit it checking first num ascii value and similarly so on with others.

// TO FIX THESE WE HAVE A SMALL FUNCTION 
// Example : Ascending sorting of numbers 
let num = [,87,534,3,25,678,9,8,22];
num.sort((a,b)=>{
    return a - b;
})
console.log(num);

// Example : Descending sorting of numbers 
num.sort((a,b)=>{
    return b - a;
})
console.log(num);



// #################################################
// Realistic Example like flipkart high to low price or low to high price 

let products = [
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"ball",price:120},
    {productId:3,productName:"watch",price:1500},
    {productId:4,productName:"tissue",price:300},
    {productId:4,productName:"tshirt",price:800},
]


// now suppose we wanna see products according to low to high price 
// we will not affect the original array we will replicate it or clone it 
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price;
})
// Now original array does not affected 
// console.log(products)

// But new array created which we clone using slice(0)
console.log(lowToHigh);

// now we wanna see products according to high to low price 

const highToLow = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
})
console.log(highToLow);












// Not Important available on web #######################################################
// Ascii values of all numbers , characters , special characters

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125
