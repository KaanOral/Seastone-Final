const hamMenu = document.querySelector('.ham__menu');


const hiddenMenu = document.querySelector('.hidden__menu')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    hiddenMenu.classList.toggle('active');

    
})

 const emailForm = document.querySelector('.emailForm')
emailForm.addEventListener('submit', (event) => {
event.preventDefault();

const formData = new FormData(emailForm)
const obj = Object.fromEntries(formData)

const json = JSON.stringify(obj)
localStorage.setItem('form', json);

window.location.href = "https://formspree.io/f/mrebnbog"
})

