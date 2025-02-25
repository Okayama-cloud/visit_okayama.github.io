let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex - 1].style.opacity = "1";  

    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

showSlides(); // Start the slideshow
