const navToggle = document.getElementById('nav-toggle');
const menuContainer = document.getElementById('menu-cntr');
const menuList = document.getElementById('menu-list');

navToggle.addEventListener('click', () => {
  const menuHeight = menuContainer.getBoundingClientRect().height;
  const listHeight = menuList.getBoundingClientRect().height;
  
  menuHeight === 0 ? 
  menuContainer.style.height = `${listHeight}px` :
  menuContainer.style.height = 0;
});

const nav = document.getElementById('nav');
const toTop = document.getElementById('btt');
window.addEventListener('scroll', () => {
  let scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;

  scrollHeight > navHeight ?
    nav.classList.add('fixed-nav') :
    nav.classList.remove('fixed-nav');

  scrollHeight > 400 ? 
    toTop.classList.add('show-btn') :
    toTop.classList.remove('show-btn');
});

const links = document.querySelectorAll('.menu-link');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = menuContainer.getBoundingClientRect().height;

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    const fixedNav = nav.classList.contains('fixed-nav')
    let position = element.offsetTop - navHeight;

    if(!fixedNav) position = position - navHeight + 30;

    if(navHeight > 106) position = position + containerHeight;

    window.scrollTo({ left: 0, top: position });

    menuContainer.style.height = 0;
  });
});

// Form text
const inputs = document.querySelectorAll('.user-input');
inputs.forEach((input, idx) => {
  let span = inputs[idx].previousElementSibling;
  input.addEventListener('keyup', e => {
    e.currentTarget.value === '' 
      ? span.classList.remove('keyed')
      : span.classList.add('keyed');
  });
});

// Footer Date
let currentYear = new Date().getFullYear();
date.textContent = currentYear;