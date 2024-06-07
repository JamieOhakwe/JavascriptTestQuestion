/*
Rest parameters: Represents an indefinite number of 
parameters (packs arguments into an array)
*/

let a = 2;
let b = 3;
let c= 4;
let d = 5;
let e = 6;
let f = 7;
let total = 0;

console.log(restParams(a,b,c,d,e));

function restParams(...numbers){
    for (const number of numbers) {
        total += number;
    }
    return total;
}