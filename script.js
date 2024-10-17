// navbar

// Function to add 'navbar-scrolled' class when the user scrolls down
window.onscroll = function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
};