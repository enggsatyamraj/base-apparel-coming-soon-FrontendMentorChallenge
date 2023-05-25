const button = document.querySelector('.submit_button');
const valid_email = document.querySelector('.valid_email');
const error_image = document.querySelector('.error_image');

button.addEventListener("click",fnc);

function fnc(){
    const email_input = document.querySelector('.email_input');

    const email = email_input.value.trim();


    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValid = regex.test(email);

    if(!isValid){
        valid_email.style.display = 'block';
        error_image.style.display = 'block';
    }
    else{
        valid_email.style.display = 'none';
        error_image.style.display = 'none';
    }
}