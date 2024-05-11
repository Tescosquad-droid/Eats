import { foods } from "../data/foods.js";

let menu = ''

foods.forEach((food) => {
  menu += `
    <div class="food">
      <div class="image">
        <img src="${food.image}" alt="" class="food-image">
      </div>
      <div class="food-details">
        <p class="food-name">${food.name}</p>
        <p class="price">N ${food.price}</p>
        <a href="meal.html"><button class="check-button" data-id='${food.id}'>Check</button></a>
      </div>
    </div>
  `
})

document.querySelector('.menu-container').innerHTML = menu

const checkButton = document.querySelectorAll('.check-button')
checkButton.forEach((button) => {
  button.addEventListener('click', () => {
    const id = button.dataset.id
    localStorage.setItem('id', JSON.stringify(id))
  })
})
