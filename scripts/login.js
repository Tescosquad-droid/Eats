import { userData } from '../data/user.js'

const passwordEye = document.querySelector('.password-eye')
const passwordInput = document.querySelector('.js-password-input')
passwordEye.addEventListener('click', () => {
  passwordInput.attributes[0].value === 'password' ? passwordInput.setAttribute('type', 'text') : passwordInput.setAttribute('type', 'password')
  if (passwordInput.attributes[0].value === 'text')  {
    passwordEye.setAttribute('src', 'images/food-icons/password-open-logo.png')
  } else {
    passwordEye.setAttribute('src', 'images/food-icons/password-locked-logo.png')
  }
})

const login = document.querySelector('button')
login.addEventListener('click', () => {
  const userInput = document.querySelector('.js-username-input')
  const passwordInput = document.querySelector('.js-password-input')
  const emailWarning = document.querySelector('.email-warning')
  const passwordWarning = document.querySelector('.password-warning')
  if (userInput.value === '') {
    emailWarning.innerHTML = 'Please input your Username or Email'
  } else {
    emailWarning.innerHTML = ''
  }
  if (passwordInput.value === '') {
    passwordWarning.innerHTML = 'Please input your Password'
  } else {
    passwordWarning.innerHTML = ''
  }
  if (userInput.value !== '' && passwordInput.value !== '') {
    if (userInput.value.includes('@gmail.com')) {
      if (userInput.value === userData.email) {
      } else {
        emailWarning.innerHTML = 'Invalid Username or Email'
      }
    } else {
      if (userInput.value === userData.username) {
      } else {
        emailWarning.innerHTML = 'Invalid Username or Email'
      }
    }
    if (passwordInput.value !== userData.password) {
      passwordWarning.innerHTML = 'Invalid Password'
    }
    if ((userInput.value === userData.username || userInput.value === userData.email) && passwordInput.value === userData.password) {
      const tag = document.querySelector('.tag')
      tag.setAttribute('href', 'index.html')
    }
  }
})