// ALL YOU JS GOES HERE

document.addEventListener('DOMContentLoaded', () => {
    console.log('JS LOADED');

    const hamburger = document.querySelector('.menu');
    const dropdown = document.querySelector('.dropdown');

    console.log('hamburger:', hamburger);
    console.log('dropdown:', dropdown);

    if (!hamburger) {
        console.error('❌ .menu NOT FOUND');
    }

    if (!dropdown) {
        console.error('❌ .dropdown NOT FOUND');
    }

    hamburger.addEventListener('click', () => {
        console.log('✅ CLICK FIRED');
        dropdown.classList.toggle('show');
        console.log('classes now:', dropdown.className);
    });
});


















