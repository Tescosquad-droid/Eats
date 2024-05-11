const firstCircle = document.querySelector('.circle-1')
const firstRect = document.querySelector('.rect-1')
const secondCircle = document.querySelector('.circle-2')
const secondRect = document.querySelector('.rect-2')
const thirdCircle = document.querySelector('.circle-3')
const first = document.querySelector('.preparing')
const second = document.querySelector('.done')
const third = document.querySelector('.delivered')

localStorage.removeItem('multiId')
localStorage.removeItem('id')
localStorage.removeItem('multiMeal')
localStorage.removeItem('count')
localStorage.removeItem('details')
localStorage.removeItem('orderedMeal')
firstCircle.classList.add('rotate')
second.style.display = 'none'
firstRect.style.display = 'none'
secondRect.style.display = 'none'
secondCircle.style.display = 'none'
thirdCircle.style.display = 'none'
third.style.display = 'none'
first.classList.add('display-current')
setTimeout(() => {
  firstCircle.classList.remove('rotate')
  firstCircle.style.borderStyle = 'solid'
  firstRect.style.display = 'inline-block'
  secondCircle.style.display = 'inline-block'
  second.style.display = 'inline-block'
  second.classList.add('display-current')
  firstCircle.style.backgroundColor = 'var(--clr-med-red)'
  firstRect.style.backgroundColor = 'var(--clr-med-red)'
  secondCircle.classList.add('rotate')
  setTimeout(() => {
    secondCircle.classList.remove('rotate')
    secondCircle.style.borderStyle = 'solid'
    secondRect.style.display = 'inline-block'
    thirdCircle.style.display = 'inline-block'
    third.style.display = 'inline-block'
    third.classList.add('display-current')
    secondCircle.style.backgroundColor = 'var(--clr-med-red)'
    secondRect.style.backgroundColor = 'var(--clr-med-red)'
    thirdCircle.classList.add('rotate')
    setTimeout(() => {
      thirdCircle.classList.remove('rotate')
      thirdCircle.style.backgroundColor = 'var(--clr-med-red)'
      document.querySelector('.navigate').innerHTML = '<- Back to Menu'
    }, 3000);
  }, 4000)
}, 3000)

