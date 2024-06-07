/*Callbacks are functions passed as an arguement to another function
    Ensures that a function is not going to run before 
    a task is completed. 
    Helps with Asyncronous codes (when one function has to await for another function)
    
*/
function sumNum(a,b, callback){
   let sum = a + b;   
   callback(sum);
}

function displayConsole(sum){
    console.log(sum);
}


sumNum(5, 9, displayConsole);