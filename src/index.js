// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Navbar section

function navbar(event) {
  event.preventDefault();
  document.querySelectorAll('.navbar__links').
    forEach(link => {
      if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current', 'page');
      }
    })
}

window.addEventListener("scroll", navbar);