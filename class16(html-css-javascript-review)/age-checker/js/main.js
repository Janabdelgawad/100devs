//Create a conditonal that checks their age
//--- Harder
//On click of the h1
document.querySelector("h1").addEventListener('click', takeValueFromInput)
//Take the value from the input
function takeValueFromInput() {
    const age = Number(document.querySelector('input').value)
    let action = ''
    //Place the result of the conditional in the paragraph
    //If under 16, tell them they can not drive
    if(age < 16) action = "they can not drive"
    //If under 18, tell them they can't hate from outside the club, because they can't even get in
    else if(age < 18) action = "they can't hate from outside the club, because they can't even get in"
    //If under 21, tell them they can not drink
    else if(age < 21) action = "they can not drink"
    //If under 25, tell them they can not rent cars affordably
    else if(age < 25) action = "they can not rent cars affordably"
    //If under 30, tell them they can not rent fancy cars affordably
    else if(age < 30) action = "they can not rent fancy cars affordably"
    //If over 30, tell them there is nothing left to look forward too
    else if(age > 30) action = "there is nothing left to look forward to"
    
    document.querySelector('p').innerText = action
}


