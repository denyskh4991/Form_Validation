let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
    let name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    let phone = document.getElementById('contact-phone').value;

    phoneError.innerHTML = '';

    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }

    if (!phone.match(/^[0-9]+$/)) {
        phoneError.innerHTML = 'Only digits, please';
        return false;
    }

    if (phone.length !== 11) {
        phoneError.innerHTML = 'Phone number should be 11 digits';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    let email = document.getElementById('contact-email').value;

    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}