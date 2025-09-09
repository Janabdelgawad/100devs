document.querySelector('button').addEventListener('click', display);
function display() {
    let userDrink = document.querySelector('input').value.replaceAll(' ', '%20')
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userDrink}`)
    .then(res => res.json())
    .then(data => {
        let drink  = data.drinks[0];
        console.log(drink)

        document.querySelector('h2').innerText = drink.strDrink
        document.querySelector('img').src = drink.strDrinkThumb
        document.querySelector('h3').innerText = drink.strInstructions
    })
    .catch(error => console.error(`error is ${error}`))
}