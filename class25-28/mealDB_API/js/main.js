// document.querySelector('#mealButton').addEventListener('click', display);

function display() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => {
        let meal  = data.meals[0];
        let ulIng = document.querySelector('ul');
        let olIng = document.querySelector('ol');
        ulIng.innerHTML = "";
        olIng.innerHTML = "";

        console.log(meal)

        document.querySelector('#IngPic').innerText = (`${meal.strArea} ${meal.strCategory}\n${meal.strMeal}`)

        document.querySelector('img').src = (meal.strMealThumb)


        for(let i = 1; i <= 20; i++) {
            let ingredient = meal[`strIngredient${i}`]
            let measure    = meal[`strMeasure${i}`]
            if(ingredient && ingredient.trim() && 
                measure && measure.trim() !== "") {

                let ingredientItem = document.createElement('li')
                let measureItem    = document.createElement('li')

                ingredientItem.textContent = `${ingredient}`
                measureItem.textContent    = `${measure}`

                ulIng.appendChild(ingredientItem)
                olIng.appendChild(measureItem)
            }
        }

        document.querySelector('#tutorial').href = meal["strYoutube"]
        document.querySelector('#source').href = meal["strSource"]
    })
    .catch(error => console.error(`error is ${error}`))
}
display()