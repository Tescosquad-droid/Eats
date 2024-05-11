import { foods } from "../data/foods.js";

const id = JSON.parse(localStorage.getItem('id'))

const foodDetails = foods.filter((food) => {
  return food.id === id;
})

let multiMeal = JSON.parse(localStorage.getItem('multiMeal')) || []
let count = JSON.parse(localStorage.getItem('count')) || 0
start(foodDetails, id)
function start(foodDetails, id) {

  let page = `
    <nav>
      <input type="text" class="search-input" placeholder="...search menu">
      <div class="result"></div>
      <a href="order.html"><div class="order-count">Order Count: <span class="count">${count}</span></div></a>
    </nav>
    <div class="img-container">
      <img src="${foodDetails[0].image}" alt="" class="image">
    </div>
    <div class="food-details">
      <p class="name">${foodDetails[0].name}</p>
      <p class="local-name">Traditionally called <span>${foodDetails[0].localName}</span></p>
      <p class="price">Priced at <span>N ${foodDetails[0].price}</span></p>
      <p class="description">${foodDetails[0].description}</p>
      <button class="add" data-id="${foodDetails[0].id}">Add to list</button>
      <a href="order.html"><button class="order" data-id="${foodDetails[0].id}">Single Order</button></a>
      <div class="navigate">
        <a href="menu.html"><- Back to Menu</a>
        <a class="clear">Clear Order</a>
        <a href="order.html">Place Order -></a>
      </div>
    </div>
  `
  document.querySelector('.container').innerHTML = page

  const clearOrder = document.querySelector('.clear')
  clearOrder.addEventListener('click', () => {
    localStorage.removeItem('count')
    localStorage.removeItem('orderedMeal')
    localStorage.removeItem('multiMeal')
    start(foodDetails, id)
    alert('Order Cleared Successfully!')
    document.querySelector('.count').innerHTML = '0'
  })

  const searchBox = document.querySelector('.search-input')
  let search = ''
  searchBox.addEventListener('keyup', (e) => {
    setTimeout(() => {
      if (e.code === `Key${e.key.toUpperCase()}`) {
        search += e.key
        searchData(search)
      } else if (e.key === 'Backspace') {
        const newSearch = search.slice(0, -1)
        search = newSearch
        searchData(search)
        if (newSearch === '') {
          document.querySelector('.result').innerHTML = '';
        }
      } else if (e.key === 'Enter') {
        display()
      }
    }, 200)
    
  })


  function searchData(search) {
    const searchNames = []
    const searchResult = []
    foods.forEach((food) => {
      if (!(searchNames.includes(food.name)) || !(searchNames.includes(food.localName))) {
        searchNames.push(food.name.toLowerCase())
        searchNames.push(food.localName.toLowerCase())
        if (food.localName === '') {
          searchNames.pop()
        }
      }
    })
    document.querySelector('.result').innerHTML = ''
    searchNames.forEach((foodName) => {
      if (foodName.includes(search)) {
        if (!(searchResult.includes(foodName))) {
          const item = foods.filter((food) => {
            return food.name.toLowerCase() == foodName;
          })
          if (item[0] !== undefined) {
            document.querySelector('.result').innerHTML += `<div class="food-result food-${foodName}" data-id=${item[0].id}><br>${foodName}</div><hr>`
          }
          display()
        }
      }
    })
  }

  function display() {
    document.querySelectorAll('.food-result').forEach((foodResult) => {
      foodResult.addEventListener('click', () => {
        const id = foodResult.dataset.id
        const foodDetails = foods.filter((food) => {
          return food.id === id;
        })
        localStorage.setItem('id', JSON.stringify(id))
        start(foodDetails, id)
      })
    })
  }
  display()

  const singleOrder = document.querySelectorAll('.order')
  singleOrder.forEach((single) => {
    single.addEventListener('click', () => {
      localStorage.removeItem('multiId')
      const id = single.dataset.id
      const type = 'single'
      const data = {
        id: id,
        type: type
      }
      localStorage.setItem('data', JSON.stringify(data))
    })
  })

  const multiOrder = document.querySelectorAll('.add')
  multiOrder.forEach((multi) => {
    let amount = 0
    multi.addEventListener('click', () => {
      const identity = multi.dataset.id
      window.alert('Added successfully')
      multiMeal.forEach((meal) => {
        if (meal.id === identity) {
          let amount = Number(meal.amount)
          amount++
          meal.amount = `${amount}`
        }
      })
      amount++
      const multiId = {
        amount: `${amount}`,
        id: `${identity}`
      }
      multiMeal.push(multiId)
      for (let i = 0; i < multiMeal.length; i++) {
        const meal = multiMeal[i];
        const next = multiMeal[i + 1]
        if (next) {
          if (meal.id === next.id) {
            multiMeal.pop()
          }
        }
      }
      localStorage.setItem('multiMeal', JSON.stringify(multiMeal))
      count++
      localStorage.setItem('count', JSON.stringify(count))
      const id = JSON.parse(localStorage.getItem('id'))
      const foodDetails = foods.filter((food) => {
        return food.id === id;
      })
      start(foodDetails, id)
    })
  })
  const orderCount = document.querySelector('.order-count')
  orderCount.addEventListener('click', () => {
    localStorage.removeItem('data')
  })
}
