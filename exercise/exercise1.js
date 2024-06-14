

let arr = [2,4,6,8,10]
let age = [18, 16, 21, 19, 18]
let grades = [98, 67, 100, 86, 78, 92, 93]

 grades.sort((x,y)=>y-x).forEach(x=> console.log(x))
// console.log(sorted)
// sorted


// arr.map(x=> console.log( Math.pow(x, 2)));

 let ageArr = age.filter( a=> a>19);
 let red = arr.reduce((total, element)=>{
    return total + element
 })
//  console.log(red);

// const squareNum = (x)=>{
//     return Math.pow(x, 2)
// }

// console.log(newArr);