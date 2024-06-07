
let arr = 'I bought a house and a car today';
let arr2 = 'I am super wealthy'


function longestWord(str){
    let words = str.split(' ');
    longestWord = '';
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word
        }
    }
    return longestWord
}

console.log(longestWord(arr2));