// Capitalize every word in a string 

// 
const capitalizeWords =(str)=>{
    return str.toLowerCase().split(' ').map(s=> s.charAt(0).toUpperCase() + s.substring(1))
}
const caps = str => {
    str = str.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')
    console.log(str)
  }
  caps("javascript is a fantastic language.")

let newStr = "Hello I am back home"
// console.log(capitalizeWords(newStr));
// console.log(capitalizedString(newStr.slice(1)));
// console.log(capitalizedString(newStr.substring(1)));