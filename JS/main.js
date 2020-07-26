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

// Havbar toggle button for small screen
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

// Make job history slowly fade to visible as the windows scrolls down
const about = document.querySelector('#about');
const aboutHeight = about.getBoundingClientRect().height;
const aboutHeightFixed = aboutHeight/1.5;

console.log('fixed: ' + aboutHeightFixed);

document.addEventListener('scroll', () => { 
    const jobHistory = document.querySelector('.about__jobs');
    if (window.scrollY > aboutHeightFixed) {
        jobHistory.style.opacity = window.scrollY / aboutHeightFixed;
    }
});


// Show Skill's progress bar when reach half of Skill section
const skills = document.querySelector('#body');
const skillsHeight = skills.getBoundingClientRect().height;

document.addEventListener('scroll', () => { 
    // console.log(window.scrollY);
    // if (window.scrollY == skillsHeight/2) {
    //     const skillsBarProgress = skills.querySelectorAll('.skill__bar__value');
    //     console.log(skillsBarProgress);

    //     for (var i = 0; i < skillsBarProgress.length; i++) {
    //         skillsBarProgress[i].classList.add('filled');
    //     }
    // }
});



//Scroll to reffered section based on selector
function scrollIntoView (selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
    console.log(`Scrolled to:  ${selector}` );
}