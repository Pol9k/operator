/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== OPEN ANSWEARS ===============*/
const comments = document.querySelectorAll('.questions__card')
comments.forEach((comment) => {
  comment.addEventListener("click", () => {
    comment.classList.toggle("active");
  })
})

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById('header')
  //When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== 3D ===============*/
VanillaTilt.init(document.querySelectorAll(".three_d__img"), {
  max: 20,
  speed: 800
});


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  // When the scroll is higher than 350 viewport height, and the show-scroll class to the a tag with the scroll
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
const darkTheme = 'dark-theme'
// const iconTheme = 'bx-sun'
const iconTheme = 'bx-sun'

/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '60px',
//   duration: 2500,
//   delay: 400,
//   // reset: true // Animation repeat
// })
// sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
// sr.reveal(`.home__image`, {origin: 'bottom'})
// sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
// sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
// sr.reveal(`.services__card, .projects__card`, {interval: 500})

