alert('Hello ! Gym Rats ')
document.querySelectorAll('a[href^="#"]').forEach(anchor => {anchor.addEventListener('click', function (e) {e.preventDefault();document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});});});

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('home');

    homeButton.addEventListener('click', () => {
        // Change the URL to your homepage URL
        window.location.href = 'http://127.0.0.1:5500/thegymrat.html#'; // Replace with your homepage URL
    });
});


document.getElementById("myElement").innerText = "Hello, World!";
