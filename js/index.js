// toggle mobile navigation
const navigationBtn = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

navigationBtn.addEventListener('click', () => {
  header.classList.toggle('nav-open');
})

// remove mobile navigation from screen when menu item pressed
const allMainNavLinks = document.querySelectorAll('.main-nav-link')

allMainNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  })
})