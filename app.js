// This file contains the JavaScript code for the webpage. It handles user interactions, form submissions, and any dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
    const healthCardForm = document.getElementById('healthCardForm');
    const submitButton = document.getElementById('submitButton');

    if (healthCardForm) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            const formData = new FormData(healthCardForm);
            const data = Object.fromEntries(formData.entries());

            console.log('Form submitted:', data);
            // Here you can add code to handle the form submission, e.g., sending data to a server
        });
    }

    // Additional dynamic content updates can be added here
});