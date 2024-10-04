let slideIndex =1;
showSlides(slideIndex);

//navigera fram eller bakåt
function plusSlides(n) {
    showSlides(slideIndex +=n);

}

//Funktion för att gå till specifik bild
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Visar rätt bild och uppdaterar prickarna
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex= slides.length}

   
    for (i = 0; i <slides.length; i++) {
        slides[i].style.display = "none";
    }

    
    for (i = 0; i <dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    
    slides[slideIndex -1].style.display = "block";
    dots[slideIndex -1].className += " active";
}

//Auto slideshow 
let autoSlideIndex = 0; 
autoShowSlides();

function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    //Dölj alla bilder
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    
}

autoSlideIndex++;
if (autoSlideIndex > slides.length) { autoSlideIndex = 1}


//Visa nästa bild
slides[autoSlideIndex -1].style.display = "block";

//Uppdatera prickarna
let dots = document.getElementsByClassName("dot");
for(i =0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");   
}
dots[autoSlideIndex -1].className+= " active";

setTimeout(autoShowSlides, 8000); //Byter bilder var 8 sekund
}

// Återställ automatisk slideshow-timer
function resetAutoShow() {
    clearTimeout(autoShowInterval); 
    autoSlideIndex = slideIndex - 1; 
    autoShowSlides(); 
}

//Mobile meny
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    hamburgerButton.addEventListener('click', () =>
      mobileMenu.classList.toggle('active')
    );
  });




