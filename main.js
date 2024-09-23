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

 // document.addEventListener('DOMContentLoaded', function() {
   // const form = document.getElementById('applicationForm');
    
    //form.addEventListener('submit', function(event) {
        // Hämta telefonnummer och mönstret för att kontrollera det
      //  const phoneInput = document.getElementById('number');
       // const phonePattern = /^[0-9]{10}$/;

        // Kontrollera om telefonnumret är giltigt
        //if (!phonePattern.test(phoneInput.value)) {
          //  alert('Ange ett giltigt telefonnummer med 10 siffror.');
            //event.preventDefault();  // Stoppa formuläret från att skickas om fel
       // }
  //  });
// }); 




