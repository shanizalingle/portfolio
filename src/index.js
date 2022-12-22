import './css/styles.css';

//Cursor
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    });
})

// preloader
const loader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  loader.style.display="none";
});

// Navbar section 
const highlightMenu = () => {
  const highlight = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const projectsMenu = document.querySelector('#projects-page');
  const contactMenu = document.querySelector('#contact-page');
  let scrollPos = window.scrollY;

  // adds 'highlight' class to navbar
  if (scrollPos < 450) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    projectsMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  } else if (scrollPos < 1000) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    projectsMenu.classList.remove('highlight');
    return;
  } else if (scrollPos < 1600) {
    projectsMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    return;
  } else if (scrollPos < 1900) {
    contactMenu.classList.add('highlight');
    projectsMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((highlight && window.innerWIdth < 642 && scrollPos < 600) || highlight) {
    highlight.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Hide navbar on scroll
var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if(prevScrollPos > currentScrollPos) {
    document.getElementById('navbar').style.top="0";
  } else {
    document.getElementById('navbar').style.top="-300px";
  }

  prevScrollPos = currentScrollPos;

  //Hide footer on scroll
  if (window.scrollY > 1200) {
    document.querySelector(".footer__container").style.bottom="-80px";
  } else {
    document.querySelector(".footer__container").style.bottom="2%";
  }
};


// Open mobile navbar
const menuBtn = document.querySelector('#open-menu');
const closeBtn = document.querySelector('#close-menu');
const mobileNavbar = document.querySelector(".mobile__navbar");
const logo = document.querySelector("#navbar-logo");
const footer = document.querySelector(".footer");
const navbar = document.querySelector(".navbar");
const body = document.querySelector('body');
// const mobileLinks = document.querySelector(".mobile__links");
const mobileMenu = document.querySelector(".mobile__menu");

function openMenu () {
  console.log("openMenu");
  menuBtn.style.display="none";
  closeBtn.style.display="flex";
  mobileNavbar.style.display="flex";
  // logo.style.display="none";
  footer.style.display="none";
  navbar.style.backgroundColor="rgba(255, 255, 255, 0)";
  navbar.style.backdropFilter="blur(0px)";
  body.style.overflow="hidden";
}

menuBtn.addEventListener("click", openMenu);

//Close mobile navbar
function closeMenu () {
  console.log("closeMenu");
  menuBtn.style.display="flex";
  closeBtn.style.display="none";
  mobileNavbar.style.display="none";
  // logo.style.display="flex";
  footer.style.display="flex";
  navbar.style.backgroundColor="rgba(255, 255, 255, 0.476";
  navbar.style.backdropFilter="blur(30px)";
  body.style.overflow="scroll";
}

closeBtn.addEventListener("click", closeMenu);
mobileMenu.addEventListener("click", closeMenu);
logo.addEventListener("click", closeMenu);
window.addEventListener("resize", closeMenu);

// Btns for project scrolling

// const rightBtn = document.getElementById('#right-btn');
// const leftBtn = document.getElementById('#left-btn');

// function rightClick () {
//   console.log('right');
//   document.getElementById('#projects-scroller').scrollLeft += 20;
// }

// function leftClick () {
//   console.log('left');
//   document.getElementById('#projects-scroller').scrollLeft -= 20;
// }

// rightBtn.addEventListener("click", rightClick);
// leftBtn.addEventListener("click", leftClick);

