// ALL YOU JS GOES HERE

//dropdown menu
document.addEventListener('DOMContentLoaded', () => {
    console.log('JS LOADED');

    const hamburger = document.querySelector('.menu');
    const dropdown = document.querySelector('.dropdown');

    console.log('hamburger:', hamburger);
    console.log('dropdown:', dropdown);

    
    if (!hamburger) {
        console.error('.menu NOT FOUND');
    }

    if (!dropdown) {
        console.error('.dropdown NOT FOUND');
    }

    hamburger.addEventListener('click', () => {
        console.log('CLICK FIRED');
        dropdown.classList.toggle('show');
        
    });
});




//dropdown loop

const element = document.querySelector('.dropdown-style')
const navLinks = element.querySelectorAll('a.links')

for (let i = 0; i < navLinks.length; i++ ) {
navLinks[i].addEventListener('click', closemenu)
}

function closemenu() {
    const dropdown = document.querySelector('.dropdown');
     dropdown.classList.remove('show');
}











