'use strict';

// Make Navbar transparent when it is on top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Navbar toggle button for small screen
const navbarToogleBtn = document.querySelector('.navbar__toggle-btn')
navbarToogleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

// Handle scrolling when tapping on navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
})

// Go to contact section when "Contact Me" button is clicked
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (event) => {
    scrollIntoView('#contact');
})

// Make home slowly fade to transparent as the windows scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => { 
    home.style.opacity = 1 - window.scrollY / homeHeight
});

// Go to Home when arrow up button is clicked
const arrowUpBtn = document.querySelector('#arrowUp');
arrowUpBtn.addEventListener('click', (event) => {
    scrollIntoView('#home');
})

//Make Arrow Up button slowly visible as the windows scrolls down
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight) {
        arrowUpBtn.classList.add('visible');
    } else {
        arrowUpBtn.classList.remove('visible');
    }
});

//Scroll to reffered section based on selector
function scrollIntoView (selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
    console.log(`Scrolled to:  ${selector}` );
}