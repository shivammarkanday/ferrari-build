document.addEventListener('DOMContentLoaded', function () {
    // Get the login form
    const loginForm = document.querySelector('.login-form');

    // Add event listener for form submission
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get username and password values
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        // Log the credentials to the console
        console.log('Username:', username);
        console.log('Password:', password);

        // You can add further logic here, like sending the credentials to a server for authentication
    });
});
