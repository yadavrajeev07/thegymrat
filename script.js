// script.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const switchToSignupLink = document.getElementById('switch-to-signup');
    const switchToLoginLink = document.getElementById('switch-to-login');

    // Switch to Signup Form
    switchToSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    });

    // Switch to Login Form
    switchToLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    // Handle Login Form Submission
    loginForm.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (validateEmail(email) && validatePassword(password)) {
            // Simulate login process
            alert('Login Successful!');
            // Redirect to homepage or dashboard
            // window.location.href = '/home'; // Uncomment this to redirect
        } else {
            alert('Invalid email or password.');
        }
    });

    // Handle Signup Form Submission
    signupForm.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (name && validateEmail(email) && validatePassword(password)) {
            // Simulate signup process
            alert('Signup Successful!');
            // Redirect to homepage or dashboard
            // window.location.href = '/home'; // Uncomment this to redirect
        } else {
            alert('Please fill in all fields correctly.');
        }
    });

    // Email Validation Function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Password Validation Function (min 6 characters)
    function validatePassword(password) {
        return password.length >= 6;
    }
});

   let intervalId;

        // Function to toggle the text in a loop
        const toggleText = function () {
            const h1 = document.querySelector('h1');
            if (h1.innerHTML === "Chai aur Code") {
                h1.innerHTML = "Best JS Series";
            } else {
                h1.innerHTML = "Chai aur Code";
            }
        };

        // Start the interval loop
        intervalId = setInterval(toggleText, 2000);

        // Stop the loop and reset the text
        document.querySelector('#stop').addEventListener('click', function () {
            clearInterval(intervalId); // Stop the interval
            console.log("STOPPED");

            if (this.innerHTML === "Again") {
                document.querySelector('h1').innerHTML = "Chai aur Code"; // Reset text
                this.innerHTML = "Stop"; // Reset button text
            } else {
                this.innerHTML = "Again"; // Change button text to "Again"
            }
        });
