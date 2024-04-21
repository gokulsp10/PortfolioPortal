// Function to validate email
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to validate phone number
function validatePhone(phone) {
    const re = /^[789]\d{9}$/;
    return re.test(phone);
}

// Function to validate name
function validateName(name) {
    return name.trim() !== '';
}

// Function to validate message
function validateMessage(message) {
    return message.trim() !== '';
}

// Function to validate the contact form
function validateContactForm() {
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const phone = document.getElementById('form-phone').value;
    const message = document.getElementById('form-message').value;
    let isValid = true;

    // Validate name
    const nameErrorSpan = document.getElementById('name-error');
    if (!validateName(name)) {
        nameErrorSpan.textContent = 'Please enter your name';
        isValid = false;
    } else {
        nameErrorSpan.textContent = '';
    }

    // Validate email
    const emailErrorSpan = document.getElementById('email-error');
    if (email.trim() === '' || !validateEmail(email)) {
        emailErrorSpan.textContent = 'Please enter a valid email';
        isValid = false;
    } else {
        emailErrorSpan.textContent = '';
    }

    // Validate phone number
    const phoneErrorSpan = document.getElementById('phone-error');
    if (phone.trim() === '' || !validatePhone(phone)) {
        phoneErrorSpan.textContent = 'Please enter a valid phone number';
        isValid = false;
    } else {
        phoneErrorSpan.textContent = '';
    }

    // Validate message
    const messageErrorSpan = document.getElementById('message-error');
    if (!validateMessage(message)) {
        messageErrorSpan.textContent = 'Please enter your message';
        isValid = false;
    } else {
        messageErrorSpan.textContent = '';
    }
    if (isValid) {
        alert("Thanks for reaching to us. Your data name: " + name + ", email:" + email + ",phone" + phone + "Your message: " + message);
    }
    return isValid;
}

// Add event listeners for input validation
document.getElementById('form-name').addEventListener('input', function () {
    const name = this.value;
    const errorSpan = document.getElementById('name-error');
    if (!validateName(name)) {
        errorSpan.textContent = 'Please enter your name';
    } else {
        errorSpan.textContent = '';
    }
});

document.getElementById('form-email').addEventListener('input', function () {
    const email = this.value;
    const errorSpan = document.getElementById('email-error');
    if (email.trim() === '' || !validateEmail(email)) {
        errorSpan.textContent = 'Please enter a valid email';
    } else {
        errorSpan.textContent = '';
    }
});

document.getElementById('form-phone').addEventListener('input', function () {
    const phone = this.value;
    const errorSpan = document.getElementById('phone-error');
    if (phone.trim() === '' || !validatePhone(phone)) {
        errorSpan.textContent = 'Please enter a valid phone number';
    } else {
        errorSpan.textContent = '';
    }
});

document.getElementById('form-message').addEventListener('input', function () {
    const message = this.value;
    const errorSpan = document.getElementById('message-error');
    if (!validateMessage(message)) {
        errorSpan.textContent = 'Please enter your message';
    } else {
        errorSpan.textContent = '';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});