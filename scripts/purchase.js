import { foods } from "../data/foods.js"

const multiId = JSON.parse(localStorage.getItem('multiId'))
let meals = []
if (multiId) {
  multiId.forEach((multi) => {
    const meal = foods.filter((food) => {
      return food.id === multi.id
    })
    const pack = {
      foodPackage: meal[0],
      amount: multi.amount
    }
    meals.push(pack)
  })
}
let price = []
meals.forEach((meal) => {
  price.push(
    {
      price: meal.foodPackage.price,
      amount: meal.amount,
      name: meal.foodPackage.name
    }
  )
})
let total = 0
localStorage.setItem('orderedMeal', JSON.stringify(price))
price.forEach((amount) => {
  total += (Number(amount.price) * Number(amount.amount))
})
document.querySelector('.price').innerHTML = `${total}`

document.querySelector('.total').innerHTML = `${total + 300}`

const firstNext = document.querySelector('.first-next')
const firstPrev = document.querySelector('.first-prev')
const secondNext = document.querySelector('.second-next')
const secondPrev = document.querySelector('.second-prev')
const thirdNext = document.querySelector('.third-next')
const thirdPrev = document.querySelector('.third-prev')
const detailBox = document.querySelector('.detail')
const slidePage = document.querySelector('.slide-page')


firstNext.addEventListener('click', () => {
  slidePage.style.marginLeft = '-100%'
})
secondNext.addEventListener('click', () => {
  slidePage.style.marginLeft = '-200%'
})
thirdNext.addEventListener('click', () => {
  slidePage.style.marginLeft = '-300%'
})
firstPrev.addEventListener('click', () => {
  slidePage.style.marginLeft = '0%'
})
secondPrev.addEventListener('click', () => {
  slidePage.style.marginLeft = '-100%'
})
thirdPrev.addEventListener('click', () => {
  slidePage.style.marginLeft = '-200%'
})

const firstName = document.querySelector('.firstName')
const lastName = document.querySelector('.lastName')
const email = document.querySelector('.email')
const emailWarning = document.querySelector('.email-warning')
const number = document.querySelector('.number')
const numberWarning = document.querySelector('.number-warning')
const dob = document.querySelector('.dob')
const dobWarning = document.querySelector('.dob-warning')
const streetNo = document.querySelector('.streetNo')
const streetName = document.querySelector('.streetName')
const city = document.querySelector('.city')
const submitButton = document.querySelector('.submit')

submitButton.addEventListener('click', () => {
  const link = document.querySelector('.link')
  
  if (thirdChecked === true) {
    link.removeAttribute('href')
    card()
  } else {
    const details = {
      name: `${firstName.value} ${lastName.value}`,
      email: `${email.value}`,
      number: `${number.value}`,
      dob: `${dob.value}`,
      street: `${streetNo.value}, ${streetName.value}, ${city.value} state, Nigeria`,
      price: `${total + 300}`
    }
    localStorage.setItem('details', JSON.stringify(details))
    link.setAttribute('href', 'submit.html')
  }
  const verified = document.querySelector('.verifying')
  if (secondChecked === true) {
    if (!verified) {
      link.removeAttribute('href') 
    } else if (verified.innerHTML === 'Payment Verified') {
      link.setAttribute('href', 'submit.html')
    }
  }
})
const personalInfo = document.querySelectorAll('.info')
const locationInfo = document.querySelectorAll('.info-2')
firstNext.addEventListener('click', () => {
  personalInfo.forEach((info) => {
    if (!(info.value === '')) {
      const year = dob.value.slice(0, 4)
      if (!(email.value.includes('@gmail.com'))) {
        emailWarning.innerHTML = 'Please use the google mail format'
        slidePage.style.marginLeft = '0%'
      } else {
        emailWarning.innerHTML = ''
      }
      if (!(number.value.length === 11)) {
        numberWarning.innerHTML = 'Please input a complete phone number'
        slidePage.style.marginLeft = '0%'
      } else {
        numberWarning.innerHTML = ''
      }
      if ((2024 - Number(year)) < 13) {
        dobWarning.innerHTML = 'You must be atleast 13 years old!'
        slidePage.style.marginLeft = '0%'
      } else {
        dobWarning.innerHTML = ''
      }
      document.querySelector('.warning-1').innerHTML = ''
    } else {
      slidePage.style.marginLeft = '0%'
      document.querySelector('.warning-1').innerHTML = 'Please fill in the above spaces'
    }
  })
})

secondNext.addEventListener('click', () => {
  locationInfo.forEach((info) => {
    if (!(info.value === '')) {
      const streetNo = document.querySelector('.streetNo')
      const streetName = document.querySelector('.streetName')
      const state = document.querySelector('.city')
      const addressInfo = {
        number: streetNo.value,
        address: streetName.value,
        state: state.value
      }
      localStorage.setItem('addressInfo', JSON.stringify(addressInfo))
      document.querySelector('.warning-2').innerHTML = ''
    } else {
      slidePage.style.marginLeft = '-100%'
      document.querySelector('.warning-2').innerHTML = 'Please fill in the above spaces'
    }
  })
})

let firstChecked = true
let secondChecked = false
let thirdChecked= false
const paymentType = document.querySelector('.payment-type')
function radioReset(firstChecked, secondChecked, thirdChecked) {
  paymentType.innerHTML = `
    <div>
      <input type="radio" ${firstChecked ? 'checked' : ''} class="radio radio-1" id="1">
      <label for="cash">In Person</label>
    </div>
    <div>
      <input type="radio" ${secondChecked ? 'checked' : ''} class="radio radio-2" id="2">
      <label for="transfer">Bank Transfer</label>
    </div>
    <div>
      <input type="radio" ${thirdChecked ? 'checked' : ''}  class="radio radio-3" id="3">
      <label for="Card">Card Payment</label>
    </div>
  `
  
}
radioReset(firstChecked, secondChecked, thirdChecked)
const radioArray = [1, 2, 3]

function checkRadio() {
  const radioButtons = document.querySelectorAll('.radio')
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('click', () => {
      const id = Number(radioButton.id)
      if (id === 1) {
        firstChecked = !firstChecked
        secondChecked = false
        thirdChecked = false
        resetSlidePage( firstChecked, secondChecked, thirdChecked)
        radioReset(firstChecked, secondChecked, thirdChecked)
        checkRadio()
      } else if (id === 2) {
        firstChecked = false
        secondChecked = !secondChecked
        thirdChecked = false
        resetSlidePage( firstChecked, secondChecked, thirdChecked)
        radioReset(firstChecked, secondChecked, thirdChecked)
        checkRadio()
      } else if (id === 3) {
        firstChecked = false
        secondChecked = false
        thirdChecked = !thirdChecked
        resetSlidePage( firstChecked, secondChecked, thirdChecked)
        radioReset(firstChecked, secondChecked, thirdChecked)
        checkRadio()
      }
    })
  })
}
checkRadio()

const mmyy = document.querySelector('.mmyy')
const cvv = document.querySelector('.cvv')
mmyy.addEventListener('keydown', () => {
  if (mmyy.value.length === 2) {
    mmyy.value += '/'
  }
})
mmyy.addEventListener('keyup', () => {
  if (mmyy.value.length === 5) {
    mmyy.blur()
  }
})

cvv.addEventListener('keyup', () => {
  if (cvv.value.length === 3) {
    cvv.blur()
    mmyy.focus()
  }
})

function resetSlidePage( firstChecked, secondChecked, thirdChecked ) {
  const accountInfo = document.querySelector('.account-info')
  const accountDetailsContainer = document.querySelector('.account-details')
  const warning = document.querySelector('.warning-3')
  const cardDetailsContainer = document.querySelector('.card-details')
  const link = document.querySelector('.href')
  if (firstChecked === true) {
    accountInfo.style.display = 'none'
    slidePage.style.gridTemplateColumn = '1fr 1fr 1fr'
    thirdNext.classList.remove('third-next')
    thirdNext.classList.add('submit')
    thirdNext.innerHTML = 'Submit'
    thirdNext.addEventListener('click', () => {
      slidePage.style.marginLeft = '-200%'
      const paymentForm = 'pending'
      localStorage.setItem('paymentType', JSON.stringify(paymentForm))
      const details = {
        name: `${firstName.value} ${lastName.value}`,
        email: `${email.value}`,
        number: `${number.value}`,
        dob: `${dob.value}`,
        street: `${streetNo.value}, ${streetName.value}, ${city.value} state, Nigeria`,
        price: `${total + 300}`
      }
      localStorage.setItem('details', JSON.stringify(details))
      link.setAttribute('href', 'submit.html')
    })
  } else if (secondChecked === true) {
    accountInfo.style.display = 'initial'
    accountDetailsContainer.style.display = 'initial'
    cardDetailsContainer.style.display = 'none'
    thirdNext.classList.remove('add')
    thirdNext.classList.add('third-next')
    thirdNext.innerHTML = 'Next'
    thirdNext.addEventListener('click', () => {
      localStorage.removeItem('paymentType')
      link.removeAttribute('href')
      slidePage.style.marginLeft = '-300%'
    })
  } else if (thirdChecked === true) {
    accountInfo.style.display = 'initial'
    cardDetailsContainer.style.display = 'initial'
    accountDetailsContainer.style.display = 'none'
    thirdNext.classList.remove('add')
    thirdNext.classList.add('third-next')
    thirdNext.innerHTML = 'Next'
    thirdNext.addEventListener('click', () => {
      localStorage.removeItem('paymentType')
      link.removeAttribute('href')
      slidePage.style.marginLeft = '-300%'
    })
  }
  warning.innerHTML = ''
  thirdNext.addEventListener('click', () => {
    if (firstChecked === false && secondChecked === false && thirdChecked === false) {
      slidePage.style.marginLeft = '-200%'
      warning.innerHTML = 'Please choose a payment method'
    } else {
      warning.innerHTML = ''
    }
  })
}
resetSlidePage( firstChecked, secondChecked, thirdChecked )

function card() {
  const inputs = document.querySelectorAll('.card-details input')
  const link = document.querySelector('.link')
  inputs.forEach((input) => {
    if (input.value === '') {
      document.querySelector('.warning-4').innerHTML = 'Please fill in all the spaces'
    } else {
      const accountName = document.querySelector('.accountName')
      const cardNo = document.querySelector('.cardNo')
      const cvv = document.querySelector('.cvv')
      const mmyy = document.querySelector('.mmyy')
      const bank = document.querySelector('.bank')
      const cardType = document.querySelector('.cardType')
      const accountDetails = {
        account: accountName.value,
        cardNo: cardNo.value,
        cvv: cvv.value,
        mmyy: mmyy.value,
        bank: bank.value,
        type: cardType.value
      }
      localStorage.setItem('accountDetails', JSON.stringify(accountDetails))
      link.setAttribute('href', 'submit.html')
    }
  })
}
card()

let checked = false

const transferButton = document.querySelector('.transfer')
transferButton.addEventListener('click', () => {
  checked = true
  const verifyingContainer = document.querySelector('.verifying-container')
  transferButton.innerHTML = `
    <div class="verify-load"></div>
  `
  setTimeout(() => {
    transferButton.remove()
    verifyingContainer.innerHTML = `
    <p class="verifying change">Payment Verified</p>
  `
  }, 4000)
})

const locationDetails = JSON.parse(localStorage.getItem('addressInfo'))
const useLocation = document.querySelector('.useLocation')
if (locationDetails === null) {
  useLocation.remove()
  document.querySelector('.location-hr').remove()
} else {
  useLocation.addEventListener('click', () => {
    const streetNo = document.querySelector('.streetNo')
    const streetName = document.querySelector('.streetName')
    const state = document.querySelector('.city')
    streetNo.value = locationDetails.number
    streetName.value = locationDetails.address
    state.value = locationDetails.state
  })
}

const cardDetails = JSON.parse(localStorage.getItem('accountDetails'))
const useAccount = document.querySelector('.useAccount')
if (cardDetails === null) {
  useAccount.remove()
  document.querySelector('.account-hr').remove()
} else {
  useAccount.addEventListener('click', () => {
    const accountName = document.querySelector('.accountName')
    const cardNo = document.querySelector('.cardNo')
    const cvv = document.querySelector('.cvv')
    const mmyy = document.querySelector('.mmyy')
    const bank = document.querySelector('.bank')
    const cardType = document.querySelector('.cardType')
    accountName.value = cardDetails.account
    cardNo.value = cardDetails.cardNo
    cvv.value = cardDetails.cvv
    mmyy.value = cardDetails.mmyy
    bank.value = cardDetails.bank
    cardType.value = cardDetails.type
  })
}