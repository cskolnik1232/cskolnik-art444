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




// light/dark mode

function toggleTheme() {
  const theme = document.getElementById("lightMode");

  const current = theme.getAttribute("href");

  if (current === "css/styles.css") {
    theme.setAttribute("href", "css/darkmode.css");
  } else {
    theme.setAttribute("href", "css/styles.css");
  }
}



// Automatically switch to dark mode after 6 PM and before 6 AM

const today = new Date();

if (today.getHours() >= 18 || today.getHours() < 6) {
  document.getElementById("lightMode").setAttribute("href", "css/darkmode.css");
} else {
  document.getElementById("lightMode").setAttribute("href", "css/styles.css");
}