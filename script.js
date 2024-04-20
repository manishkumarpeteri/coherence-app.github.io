document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const forgotPasswordLink = document.getElementById('forgotPassword');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Retrieve the values of username and password fields
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // You can add code here to perform login authentication
        // For demonstration purposes, let's log the values to console
        console.log('Username:', username);
        console.log('Password:', password);
    });

    forgotPasswordLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // You can add code here to handle forgot password functionality
        // For demonstration purposes, let's log a message to console
        console.log('Forgot password link clicked!');
    });

    // Add event listener for signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting

            // Retrieve the values of form fields
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // You can add code here to perform form validation and signup process
            // For demonstration purposes, let's log the values to console
            console.log('Full Name:', fullName);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Confirm Password:', confirmPassword);

            // After processing signup, you can redirect to index.html
            window.location.href = 'index.html';
        });
    }
});
