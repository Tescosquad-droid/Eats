function reload() {


  const menuButton = document.querySelector('.menu-button')
  const cancelButton = document.querySelector('.cancel')
  const menu = document.querySelector('.menu')
  menuButton.addEventListener('click', () => {
    menu.classList.add('show-menu')
  })
  cancelButton.addEventListener('click', () => {
    menu.classList.remove('show-menu')
  })
  const userData = JSON.parse(localStorage.getItem('userData'))
  const signUp = document.querySelectorAll('.signup-button')
  signUp.forEach((button) => {
  
    if (userData !== null) {
      button.style.display = 'none';
    }
  })
  const menuNav = document.querySelector('.menu-nav')
  const aboutNav = document.querySelector('.about-nav')
  if (userData === null) {
    menuButton.remove()
    menuNav.removeAttribute('href')
    aboutNav.removeAttribute('href')
    menuNav.addEventListener('click', () => {
      alert('Please Sign Up first!')
    })
    aboutNav.addEventListener('click', () => {
      alert('Please Sign Up first!')
    })
  } else {
    menuNav.setAttribute('href', 'menu.html')
    aboutNav.setAttribute('href', 'about.html')
  }
  const foodDisplay1= document.querySelector('.display-1')
  const foodDisplay2 = document.querySelector('.display-2')
  const foodDisplay3 = document.querySelector('.display-3')
  const foodDisplay4 = document.querySelector('.display-4')
  const foodDisplay5 = document.querySelector('.display-5')
  let first = 1
  let second = 2
  let third = 3
  let fourth = 4
  let fifth = 5
  setInterval(() => {
    foodDisplay1.classList.remove(`display-${first}`)
    foodDisplay2.classList.remove(`display-${second}`)
    foodDisplay3.classList.remove(`display-${third}`)
    foodDisplay4.classList.remove(`display-${fourth}`)
    foodDisplay5.classList.remove(`display-${fifth}`)
    first++
    second++
    third++
    fourth++
    fifth++
    if (fifth === 6) {
      fifth = 1
    } else if (fourth === 6) {
      fourth = 1
    } else if (third === 6) {
      third = 1
    } else if (second === 6) {
      second = 1
    } else if (first === 6) {
      first = 1
    }
    foodDisplay1.classList.add(`display-${first}`)
    foodDisplay2.classList.add(`display-${second}`)
    foodDisplay3.classList.add(`display-${third}`)
    foodDisplay4.classList.add(`display-${fourth}`)
    foodDisplay5.classList.add(`display-${fifth}`)
  }, 2500)
}
reload()