// Checked property
let mastercard = document.getElementById('mastercard')
let verve = document.getElementById('verve')
let visa = document.getElementById('visa')

function submit(){

    if(mastercard.checked){
        console.log('You are paying with a mastercard');
    }else if(verve.checked){
        console.log('You are paying with a verve card');
    }else if(visa.checked){
        console.log('You are paying with a visa card');
    }


    // console.log('Hello');
}