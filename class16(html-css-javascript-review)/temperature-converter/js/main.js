//Write your pseduo code first! 
document.querySelector('h1').addEventListener('click', convert)

function convert(){
    //get value in celsuis
    const celsuis = Number(document.querySelector('input').value)
    //convert it into fahrenheit
    let fahrenheit = celsuis * 9/5 + 32
    //display it
    document.querySelector('h2').innerText = `The tempreture in Fahrenheit is ${fahrenheit}`
}