import { userData } from '../data/user.js'
import { accountDetails } from '../data/user.js'
import { addressInfo } from '../data/user.js'

const profile = document.querySelector('.profile')
const name = document.querySelector('.name')
const email = document.querySelector('.email')
const username = document.querySelector('.name-input')
const mail = document.querySelector('.mail')
const phone = document.querySelector('.phone')
const account = document.querySelector('.account')
const card = document.querySelector('.card')
const bank = document.querySelector('.bank-input')
const type = document.querySelector('.type')
const addressNo = document.querySelector('.address-no')
const address = document.querySelector('.address')
const state = document.querySelector('.state-input')

profile.innerHTML = userData.username.slice(0, 1).toUpperCase()
name.innerHTML = userData.username
email.innerHTML = userData.email
username.innerHTML = userData.username
mail.innerHTML = userData.email
phone.innerHTML = userData.number
addressNo.innerHTML = addressInfo.number || 'Nil'
address.innerHTML = addressInfo.address || 'Nil'
state.innerHTML = addressInfo.state || 'Nil'
account.innerHTML = accountDetails.account || 'Nil'
card.innerHTML = accountDetails.cardNo || 'Nil'
bank.innerHTML = accountDetails.bank || 'Nil'
type.innerHTML = accountDetails.type || 'Nil'

