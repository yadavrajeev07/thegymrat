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
