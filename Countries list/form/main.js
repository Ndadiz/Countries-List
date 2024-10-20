const firstName = document.getElementById('first-name')
const sumbitBtn = document.getElementById('sumbit-button')
const firstNameField = document.getElementById('first-name-field')
const lastNameField = document.getElementById('last-name-field')
const emailField = document.getElementById('email-field')
const passwordField = document.getElementById('password-field')
const telephoneField = document.getElementById('telephone-field')
const bioField = document.getElementById('bio-field')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const telephone = document.getElementById('telephone')
const bio = document.getElementById('bio')
const firstNamePattern = /[A-za-z]+/g
const lastNamePattern = /[A-za-z]+/g
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
const passwordPattern = /^[A-Za-z0-9.@-_]{6,20}$/
const telephonePattern = /^[0-9]{0,4}-[0-9]{0,4}-[0-9]{0,5}$/
const bioPattern = /^[a-z_-]{8,50}$/
const message = document.createElement('p')
message.className = 'message'
const messageLastName = document.createElement('p')
messageLastName.className = 'message'
const messageEmail = document.createElement('p')
messageEmail.className = 'message'
const messagePassword =document.createElement('p')
messagePassword.className = 'message'
const messageTelephone = document.createElement('p')
messageTelephone.className = 'message'
const messageBio = document.createElement('p')
messageBio.className = 'message'
firstNameField.appendChild(message)
lastNameField.appendChild(messageLastName)
emailField.appendChild(messageEmail)
passwordField.appendChild(messagePassword)
telephoneField.appendChild(messageTelephone)
bioField.appendChild(messageBio)
let isValidName = false
let isValidLastName = false
let isValidEmail = false
let isValidPassword = false
let isValidTelephone = false
let isValidBio = false

firstName.addEventListener('change', e => {
    console.log(firstName.value)
   if( firstNamePattern.test(firstName.value) == true && (firstName.value.length >= 3 && firstName.value.length <= 16) ){
        firstName.style.border = 'solid 2px green'
        message.innerHTML = ''
   }
   else{
    firstName.style.border = ''
    message.textContent = 'First name must be alphanumeric and contain 3 - 16 characters'
    }
})

lastName.addEventListener('change', e =>{
    if( lastNamePattern.test(lastName.value) == true && (lastName.value.length >= 3 && lastName.value.length <= 16) ){
        lastName.style.border = 'solid 2px green'
        messageLastName.innerHTML = ''
   }
   else{
        lastName.style.border = ''
        messageLastName.textContent = 'Last name must be alphanumeric and contain 3 - 16 characters'
    }
})

email.addEventListener('change', e =>{
    console.log(email.value)
    console.log(emailPattern.test(email.value))
    if( emailPattern.test(email.value) === true ){
        email.style.border = 'solid 2px green'
        messageEmail.innerHTML = ''
   }
   else{
        email.style.border = ''
        messageEmail.textContent = 'Email must be valid address, e.g. example@example.com'
    }
})

password.addEventListener('change', e =>{
    if( passwordPattern.test(password.value) === true){
        password.style.border = 'solid 2px green'
       messagePassword.innerHTML = ''
   }
   else{
        password.style.border = ''
        messagePassword.textContent = 'Password must be alphanumeric(@,_ and - are also allowed) and between 6-20 characters'
    }
})

telephone.addEventListener('change', e =>{
    if( telephonePattern.test(telephone.value) === true){
       telephone.style.border = 'solid 2px green'
       messageTelephone.innerHTML = ''

   }
   else{
        telephone.style.border = ''
        messageTelephone.textContent = 'A valid Telephone numbers(11 digits and 333-333-3334)'
    }
})

bio.addEventListener('change', e =>{
    if( bioPattern.test(bio.value) === true){
       bio.style.border = 'solid 2px green'
       messageBio.innerHTML = ''
   }
   else{
        bio.style.border = ''
        messageBio.textContent = 'Bio must contain only lowercase letters, underscores, hyphens and be 8 - 50 characters'
    }
})
