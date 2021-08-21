const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const menuContainer = document.getElementById('menu-cntr');
const menuItems = document.querySelectorAll('.menu-link');
const menuList = document.getElementById('menu-list');
const inputs = document.querySelectorAll('.user-input');
const toTopBtn = document.getElementById('btt');

// Dynamic Menu Height
navToggle.addEventListener('click', () => {
  const containerHeight = menuContainer.getBoundingClientRect().height;
  const menuListHeight = menuList.getBoundingClientRect().height;
  containerHeight === 0 ?
    menuContainer.style.height = `${menuListHeight}px` :
    menuContainer.style.height = 0;
});

// Fixed Nav
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;

  scrollHeight > 300 ?
    toTopBtn.classList.add('show-btn') :
    toTopBtn.classList.remove('show-btn'); 

  scrollHeight > navHeight ?
    nav.classList.add('fixed-nav') :
    nav.classList.remove('fixed-nav');
});

// Scroll to Location
menuItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const containerHeight = menuContainer.getBoundingClientRect().height;
    const navHeight = nav.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;
    
    if(!fixedNav) position = position - navHeight;
    if(navHeight > 82) position = position + containerHeight;

    window.scrollTo({
      left: 0, top: position,
    });
    menuContainer.style.height = 0;
    console.log(id);
  });
});

// Contact Text
inputs.forEach((input, idx) => {
  let span = inputs[idx].previousElementSibling;
  input.addEventListener('keyup', e => {
    e.target.value === '' 
      ? span.classList.remove('target') 
      : span.classList.add('target');
  });
});

// Date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();