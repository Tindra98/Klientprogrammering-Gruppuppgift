// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');
  
    faqContainer.addEventListener('click', (e) => {
      const groupHeader = e.target.closest('.faq-group-header');
  
      if (!groupHeader) return;
  
      const group = groupHeader.parentElement;
      const groupBody = group.querySelector('.faq-group-body');
      const icon = groupHeader.querySelector('i');
  
      // Toggle icon
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
  
      // Toggle visibility of body
      groupBody.classList.toggle('open');

    
    // Close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');
       
        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
});

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

// Lägg till event listeners för att validera när användaren skriver i fältet
nameInput.addEventListener('input', validateName);
numberInput.addEventListener('input', validateNumber);
emailInput.addEventListener('input', validateEmail);

// Funktion för att validera namn
function validateName() {
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Namn krävs");
    } else {
        clearError(nameInput);
    }
}

// Funktion för att validera telefonnummer
function validateNumber() {
    const numberValue = numberInput.value.trim();
    if (numberValue.length < 10) {
        showError(numberInput, "Telefonnumret är för kort (måste vara exakt 10 siffror)");
    } else if (numberValue.length > 10) {
        showError(numberInput, "Telefonnumret är för långt (måste vara exakt 10 siffror)");
    } else if (!/^\d+$/.test(numberValue)) { // Kontrollera att det bara innehåller siffror
        showError(numberInput, "Ange endast siffror (inga bokstäver eller andra tecken)");
    } else {
        clearError(numberInput);
    }
}

// Funktion för att validera e-post
function validateEmail() {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(emailInput.value)) {
        showError(emailInput, "Ange en giltig e-postadress");
    } else {
        clearError(emailInput);
    }
}

// Visar felmeddelande och lägger till röd ram
function showError(input, message) {
    clearError(input); // Rensa gammalt felmeddelande om det finns

    // Skapa ett nytt <small>-element för felmeddelandet
    const errorText = document.createElement('small');
    errorText.classList.add('error-text');
    errorText.style.color = 'red'; // Gör felmeddelandet rött
    errorText.innerText = message;

    input.classList.add('is-invalid'); // Lägg till röd ram
    input.parentElement.appendChild(errorText); // Lägg till felmeddelandet direkt under fältet
}

// Rensar felmeddelande och tar bort röd ram
function clearError(input) {
    input.classList.remove('is-invalid'); // Ta bort röd ram
    const existingError = input.parentElement.querySelector('.error-text');
    if (existingError) {
        existingError.remove(); // Ta bort felmeddelande
    }
}

// Förhindra formulärsubmission om det finns fel
form.addEventListener('submit', function(event) {
    validateName();
    validateNumber();
    validateEmail();
    
    if (form.querySelector('.is-invalid')) {
        event.preventDefault(); // Förhindra submission om något fält är ogiltigt
    }
});


// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');
  
    faqContainer.addEventListener('click', (e) => {
      const groupHeader = e.target.closest('.faq-group-header');
  
      if (!groupHeader) return;
  
      const group = groupHeader.parentElement;
      const groupBody = group.querySelector('.faq-group-body');
      const icon = groupHeader.querySelector('i');
  
      
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
  
      
      groupBody.classList.toggle('open');

    
    
    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');
       
        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
});

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

// Lägg till event listeners för att validera när användaren skriver i fältet
nameInput.addEventListener('input', validateName);
numberInput.addEventListener('input', validateNumber);
emailInput.addEventListener('input', validateEmail);

// Funktion för att validera namn
function validateName() {
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Namn krävs");
    } else {
        clearError(nameInput);
    }
}

// Funktion för att validera telefonnummer
function validateNumber() {
    const numberValue = numberInput.value.trim();
    if (numberValue.length < 10) {
        showError(numberInput, "Telefonnumret är för kort (måste vara exakt 10 siffror)");
    } else if (numberValue.length > 10) {
        showError(numberInput, "Telefonnumret är för långt (måste vara exakt 10 siffror)");
    } else if (!/^\d+$/.test(numberValue)) { 
        showError(numberInput, "Ange endast siffror (inga bokstäver eller andra tecken)");
    } else {
        clearError(numberInput);
    }
}

// Funktion för att validera e-post
function validateEmail() {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(emailInput.value)) {
        showError(emailInput, "Ange en giltig e-postadress");
    } else {
        clearError(emailInput);
    }
}

// Visar felmeddelande och lägger till röd ram
function showError(input, message) {
    clearError(input); 

    // Skapa ett nytt <small>-element för felmeddelandet
    const errorText = document.createElement('small');
    errorText.classList.add('error-text');
    errorText.style.color = 'red'; 
    errorText.innerText = message;

    input.classList.add('is-invalid'); 
    input.parentElement.appendChild(errorText); 
}

// Rensar felmeddelande och tar bort röd ram
function clearError(input) {
    input.classList.remove('is-invalid'); 
    const existingError = input.parentElement.querySelector('.error-text');
    if (existingError) {
        existingError.remove(); 
    }
}

// Förhindra formulärsubmission om det finns fel
form.addEventListener('submit', function(event) {
    validateName();
    validateNumber();
    validateEmail();
    
    if (form.querySelector('.is-invalid')) {
        event.preventDefault(); 
    }
});


