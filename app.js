// Variables
let name = document.querySelector("#name");
let fatherName = document.querySelector("#fatherName");
let dateOfBirth = document.querySelector("#dateOfBirth");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

// Regix

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const nameRegix = /^\s*$/.test(name.value);
    const nameRegix2 = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(name.value);
    const fatherNameRegix = /^\s*$/.test(fatherName.value);
    const fatherNameRegix2 = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(fatherName.value);
    const dateRegix = /^\s*$/.test(dateOfBirth.value);
    const emailRegix = /^\s*$/.test(email.value);
    const emailRegix2 = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(email.value);
    const passwordRegix = /^\s*$/.test(password.value);
    const passwordRegix2 = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/.test(password.value);
    if (nameRegix) {
        swal("Your Name is Empty");
    }
    else if (!nameRegix2) {
        swal("warning!", "Your name must be contain 4 or more asciii character!", "error");
    }
    else if (fatherNameRegix) {
        swal("Your Father Name is Empty");
    }
    else if (!fatherNameRegix2) {
        swal("warning!", "Your Father name must be contain 4 or more asciii character!", "error");
    }
    else if (dateRegix) {
        swal("Your date is Empty");
    }
    else if (emailRegix) {
        swal("Your Email Address is Empty");
    }
    else if (!emailRegix2) {
        swal("warning!", "Your Email Address is invalid!", "error");
    }
    else if (passwordRegix) {
        swal("Your password is Empty");
    }
    else if (!passwordRegix2) {
        swal("warning!", "Your password must be contain 8 character the Numbers and Strings!", "error");
    }
})
