const inputs = document.querySelectorAll('.input')

inputs.forEach((input) => {
  input.addEventListener('click', () => {
    const identity = input.dataset.identity
    const username = document.querySelector(`.js-${identity}`)
    
    if (!username.classList.contains('adjusted')) {
      username.classList.add('adjusted')
    }
  })
  input.addEventListener('blur', () => {
    if (input.value === '') {
      const identity = input.dataset.identity
      const username = document.querySelector(`.js-${identity}`)
      if (username.classList.contains('adjusted')) {
        username.classList.remove('adjusted')
      }
    }
  })
})

const placeholders = document.querySelectorAll('.placeholder')
placeholders.forEach((placeholder) => {
  placeholder.addEventListener('click', () => {
    const identity = placeholder.dataset.input
    const inputSpace = document.querySelector(`.js-${identity}`)
    inputSpace.focus()
    if (!placeholder.classList.contains('adjusted')) {
      placeholder.classList.add('adjusted')
    }
  })
})

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

const submitButton = document.querySelector('.submit')
submitButton.addEventListener('click', () => {
  inputs.forEach((input) => {
    const identity = input.dataset.identity
    const warning = document.querySelector(`.${identity}`)
    if (input.value === '') {
      if (warning.style.display = 'none') {
        warning.style.display = 'grid'
        warning.innerHTML = `Please fill in your ${identity}`
      } else {
        warning.style.display = 'none'
      }
    } else {
      warning.style.display = 'none'
    }
    if (identity === 'email' && input.value !== '') {
      if (!(input.value.includes('@gmail.com'))) {
        warning.style.display = 'grid'
        warning.innerHTML = 'Please use a correct Google mail format'
      }
    } else if (identity === 'password' && input.value.length <= 5) {
      warning.style.display = 'grid'
      warning.innerHTML = 'Please use a stronger password'
    } else if (identity === 'number' && input.value !== '') {
      const phone = input.value
      if (phone.length !== 11) {
        warning.style.display = 'grid'
        warning.innerHTML = 'Phone number should have eleven digits'
      }
    }
  })
  let username = document.querySelector('.js-username-input').value
  let email = document.querySelector('.js-email-input').value
  let password = document.querySelector('.js-password-input').value
  let number = document.querySelector('.js-number-input').value
  if (username !== '' && email !== '' && password !== '' && email.includes('@gmail.com') && password.length > 5 && number.length === 11) {
    const userData = {
      username: username,
      email: email,
      password: password,
      number: number
    }
    localStorage.setItem('userData', JSON.stringify(userData))
    username = '';
    email = '';
    password = '';
    number = ''
    document.querySelector('.js-number-input').value = ''
    const tag = document.querySelector('.tag')
    tag.setAttribute('href', 'index.html')
  }
})