import { details } from "../data/user.js";

const orderedMeal = JSON.parse(localStorage.getItem('orderedMeal')) || []
let mealHTML = ''
orderedMeal.forEach((meal) => {
  mealHTML += `<p>${meal.name}</p>`
});

const orderDetails = document.querySelector('.order-details')
orderDetails.innerHTML = `
  <a href="purchase.html"><div class="arrow-container"><img src="images/food-icons/271226.png" alt="" class="arrow"></div></a>
  <header>Order Details</header>
  <div class="details">
    <p class="name">Name: <span>${details.name}</span></p>
    <p class="email">Email: <span>${details.email}</span></p>
    <p class="number">Phone Number: <span>${details.number}</span></p>
    <p class="address">Address: <span>${details.street}</span></p>
    <div class="meal">
      <div>Meals: </div>
      <div class="meal-container"></div>
    </div>
    <p class="price">Price: <span>N ${details.price}</span></p>
    <p class="payment-status">Payment Status: <span style="color: rgb(4, 196, 4)" class="payment-form">Paid</span></p>
    <p class="delivery">Delivery Time: <span>In 30 minutes time</span></p>
    <a href="success.html"><button class="submit">Confirm Order</button></a>
  </div>
`
document.querySelector('.meal-container').innerHTML = mealHTML

const paymentForm = document.querySelector('.payment-form')
const paymentType = localStorage.getItem('paymentType')
if (paymentType !== null) {
  paymentForm.innerHTML = 'Not yet Paid'
  paymentForm.style.color = 'black'
}
