// forEach(); API-Async await -index

let arr = ['jamie', 'chigozie', 'ohakwe']

arr.forEach(capLetter);
// let newWord = arr[1]

// console.log(newWord[0].toUpperCase())

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1);
//     console.log(arr[index])
// }

function capLetter(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1)
    console.log(array[index]);
}

// capLetter();

