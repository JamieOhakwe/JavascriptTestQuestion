/*SWITCH STATEMENT: 
statement that checks a value for a match 
against many case clauses
More efficient that many if/else statement

*/

let grade = "B"

function result(){
    // if(grade == "A"){
    //     console.log('You are Excellent!');
    // }else if(grade == "B"){
    //     console.log('You did very well');
    // }

    switch (grade) {
        case "A":
            console.log('You are Excellent!');
            break;
        case "B":
            console.log('You are Excellent!');
            break;

    
        default:
            break;
    }
}

result();