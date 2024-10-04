
// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    hamburgerButton.addEventListener('click', () =>
      mobileMenu.classList.toggle('active')
    );
  });
  
// validering

const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const emailInput = document.getElementById('email');
const form = document.getElementById('applicationForm');


nameInput.addEventListener('input', validateName);
numberInput.addEventListener('input', validateNumber);
emailInput.addEventListener('input', validateEmail);


function validateName() {
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Namn krävs");
    } else {
        clearError(nameInput);
    }
}

function validateNumber() {
    const numberValue = numberInput.value.trim();

   
    if (/^\+46\d{9}$/.test(numberValue)) {
        clearError(numberInput);
    }
   
    else if (/^\d{10}$/.test(numberValue)) {
        clearError(numberInput);
    }
    
    else if (numberValue.length < 10) {
        showError(numberInput, "Telefonnumret är för kort (måste vara 10 siffror eller +46 följt av 9 siffror)");
    }
   
    else if (numberValue.length > 13) { 
        showError(numberInput, "Telefonnumret är för långt (måste vara 10 siffror eller +46 följt av 9 siffror)");
    }
    
    else {
        showError(numberInput, "Ogiltigt nummer. Ange endast siffror eller +46 följt av 9 siffror.");
    }
}


function validateEmail() {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(emailInput.value)) {
        showError(emailInput, "Ange en giltig e-postadress");
    } else {
        clearError(emailInput);
    }
}


function showError(input, message) {
    clearError(input); 

   
    const errorText = document.createElement('small');
    errorText.classList.add('error-text');
    errorText.innerText = message;

    input.parentElement.appendChild(errorText); 
}


function clearError(input) {
    input.classList.remove('is-invalid'); 
    const existingError = input.parentElement.querySelector('.error-text');
    if (existingError) {
        existingError.remove(); 
    }
};



