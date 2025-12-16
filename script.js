const navbarEl = document.querySelector('.navbar');
const hamburgerEl = document.querySelector('.hamburger');
const sidebarEl = document.querySelector('.sidebar')

hamburgerEl.addEventListener('click', ()=>{
    navbarEl.classList.toggle("navbar--open");
    hamburgerEl.classList.toggle("hamburger--open");
    sidebarEl.classList.toggle("sidebar--open")
})

navbarEl.addEventListener('click', ()=>{
    navbarEl.classList.remove("navbar--open");
    hamburgerEl.classList.remove("hamburger--open");
    sidebarEl.classList.remove("sidebar--open")
})