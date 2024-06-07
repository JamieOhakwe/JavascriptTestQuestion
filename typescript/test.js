const input = document.getElementById('inputValue')

// document.getElementById('button').click = function() {
//     console.log('Hello');
    
// }

// function dispalyConsole(){
//     console.log('Hello');
// }

let button = document.getElementById('button')

// button.addEventListener('click', ()=>{
//     console.log('Hello');
// })
button.onclick = function(){
    console.log(input.value);
}