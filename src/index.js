// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Navbar section
const highlightMenu = () => {
  const highlight = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const projectsMenu = document.querySelector('#projects-page');
  const contactMenu = document.querySelector('#contact-page');
  let scrollPos = window.scrollY;

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 450) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    projectsMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1000) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    projectsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1600) {
    projectsMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1900) {
    contactMenu.classList.add('highlight');
    projectsMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((highlight && window.innerWIdth < 960 && scrollPos < 600) || highlight) {
    highlight.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
