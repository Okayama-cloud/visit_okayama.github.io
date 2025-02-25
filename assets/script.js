// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lazy Load Images
const images = document.querySelectorAll('img[loading="lazy"]');
images.forEach(img => {
    img.src = img.dataset.src;
});
