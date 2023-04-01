const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-nav');

const menuLinks = document.querySelectorAll('.menu-nav li a');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {

    event.preventDefault();


    const sectionId = link.getAttribute('href');


    const section = document.querySelector(sectionId);

    section.scrollIntoView({ behavior: 'smooth', block: 'center' });


    toggleMenu();
  });
});

function toggleMenu() {
  if (!showMenu) {
    menu.classList.add('show');
    menuBtn.classList.add('close');
    showMenu = true;
  } else {
    menu.classList.remove('show');
    menuBtn.classList.remove('close');
    showMenu = false;
  }
}