document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('banner');// Utiliser getElementById pour un ID
    const arrowLeft = document.querySelector('.arrow_left');// Utiliser querySelector pour une classe
    const arrowRight = document.querySelector('.arrow_right');// Utiliser querySelector pour une classe
    const dotsContainer = document.querySelector('.dots'); // Utiliser querySelector pour une classe

    const slides = [
        {
            "image": "slide1.jpg",
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image": "slide2.jpg",
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image": "slide3.jpg",
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image": "slide4.png",
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];

    let currentSlide = 0;

    function updateSlider() {
        const imageUrl = `url('./assets/images/slideshow/${slides[currentSlide].image}')`;
        banner.style.backgroundImage = imageUrl;

        const tagLineImage = slides[currentSlide].tagLine;
        const taglineParagraph = banner.querySelector('p');
        taglineParagraph.innerHTML = tagLineImage;
    }

    function updateActiveDot() {
        Array.from(dotsContainer.children).forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('dot_selected');
            } else {
                dot.classList.remove('dot_selected');
            }
        });
    }

    arrowLeft.addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
        updateActiveDot();
    });

    arrowRight.addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
        updateActiveDot();
    });

    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', function () {
            currentSlide = index;
            updateSlider();
            updateActiveDot();
        });
        dotsContainer.appendChild(dot);
    });

    updateSlider();
    updateActiveDot();
});
