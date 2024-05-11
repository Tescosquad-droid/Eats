import { foods } from "../data/foods.js";

const data = JSON.parse(localStorage.getItem('data'))
document.querySelector('.order-container').innerHTML = ''
const multiId = JSON.parse(localStorage.getItem('multiMeal'))
if (data !== null && data.type === 'single') {
  const orders = foods.filter((food) => {
    return food.id === data.id
  })
  let amount = 1
  function displaySingle() {
    orders.forEach((order) => {
      document.querySelector('.order-container').innerHTML = ''
      const orderHTML = `
        <div class="order">
          <img src="${order.image}" alt="" class="food-thumbnail">
          <div class="order-details">
            <p class="name">${order.name}</p>
            <p class="price">N ${order.price}</p>
            <p class="ingredient">${order.items}</p>
            <div class="amount-container">Amount: <div class="arrow arrow-left" data-id="${order.id}"></div> <span>${amount}</span> <div class="arrow arrow-right" data-id="${order.id}"></div></div>
          </div>
        </div>
      `
      document.querySelector('.order-container').innerHTML += orderHTML
  
      const arrowLeft = document.querySelector('.arrow-left')
      arrowLeft.addEventListener('click', () => {
        if (amount > 1) {
          amount--
        }
        displaySingle()
      })
      const arrowRight = document.querySelector('.arrow-right')
      arrowRight.addEventListener('click', () => {
        if (amount < 10) {
          amount++
        }
        displaySingle()
      })
      const singleId = [{
        amount: `${amount}`,
        id: data.id
      }]
      localStorage.setItem('multiId', JSON.stringify(singleId))
    })
  }
  displaySingle()
} else {

  function display() {
    if (multiId !== null) {
      document.querySelector('.order-container').innerHTML = ''
      multiId.forEach((pack) => {
        localStorage.removeItem('singleOrder')
        const order = foods.filter((food) => {
          return food.id === pack.id
        })
        const orderHTML = `
          <div class="order">
            <img src="${order[0].image}" alt="" class="food-thumbnail">
            <div class="order-details">
              <p class="name">${order[0].name}</p>
              <p class="price">N ${order[0].price}</p>
              <p class="ingredient">${order[0].items}</p>
              <div class="amount-container">Amount: <div class="arrow arrow-left" data-id="${order[0].id}"></div> <span>${pack.amount}</span> <div class="arrow arrow-right" data-id="${order[0].id}"></div></div>
            </div>
          </div>
        `
        document.querySelector('.order-container').innerHTML += orderHTML
        localStorage.setItem('multiId', JSON.stringify(multiId))
        change()
      })
    }
  }
  display()
  function change() {
    const arrowLeft = document.querySelectorAll('.arrow-left')
    arrowLeft.forEach((left) => {
      left.addEventListener('click', () => {
        const id = left.dataset.id
        const meal = multiId.filter((order) => {
          return order.id === id
        })
        let amount = meal[0].amount
        if (amount > 1) {
          amount--
          meal[0].amount = `${amount}`
          display()
        }
      })
    })
    const arrowRight = document.querySelectorAll('.arrow-right')
    arrowRight.forEach((right) => {
      right.addEventListener('click', () => {
        const id = right.dataset.id
        const meal = multiId.filter((order) => {
          return order.id === id
        })
        let amount = meal[0].amount
        if (amount < 10) {
          amount++
          meal[0].amount = `${amount}`
          display()
        }
      })
    })
  }
}

const orderButton = document.querySelector('.place-order')
orderButton.addEventListener('click', () => {
  const orderContainer = document.querySelector('.order-container')
  const href = document.querySelector('.href')
  if (orderContainer.innerHTML === '') {
    href.removeAttribute('href')
  } else {
    href.setAttribute('href', 'purchase.html')
  }
})