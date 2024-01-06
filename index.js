const hamburgerIcon = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelector('.nav-link');
const contactBtn = document.querySelector('.con-btn');

hamburgerIcon.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    navLink.classList.toggle('active');
    contactBtn.classList.toggle('active');
});
