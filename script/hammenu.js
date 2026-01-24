const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.menu-overlay');
const langSwitch = document.querySelector('.lang-switch');
const navMenu = document.querySelector('.nav-menu');
const logo = document.querySelector('.logo');

let originalParent = langSwitch.parentNode; // pamti gde je na desktopu
let originalNextSibling = langSwitch.nextElementSibling;

function moveLangToMenu() {
    if(window.innerWidth <= 768 && langSwitch.parentNode !== navMenu){
        navMenu.appendChild(langSwitch);
    } else if(window.innerWidth > 768 && langSwitch.parentNode !== originalParent){
        if(originalNextSibling){
            originalParent.insertBefore(langSwitch, originalNextSibling);
        } else {
            originalParent.appendChild(langSwitch);
        }
    }
}

// kad se klikne hamburger
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
    moveLangToMenu();
});

// kad se klikne overlay (zatvori meni)
overlay.addEventListener('click', () => {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
    moveLangToMenu();
});

// kad se menja veličina prozora
window.addEventListener('resize', moveLangToMenu);

// inicijalno postavi na pravu poziciju
moveLangToMenu();