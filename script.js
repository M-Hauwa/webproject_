const navbarEl = document.querySelector('.navbar');
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', ()=>{
    navbarEl.classList.toggle("navbar--open");
    hamburgerEl.classList.toggle("hamburger--open");
})

navEl.addEventListener('click', ()=>{
    navbarEl.classList.remove("navbar--open");
    hamburgerEl.classList.remove1("hamburger--open");
})