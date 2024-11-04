// Configurable settings
const totalImages = 6; // Adjust this to the number of images
const imageFolder = 'img/';
const imagePrefix = 'COLLAGE_';
const imageExtension = '.jpg';

const slideshowContainer = document.getElementById('slideshow-container');
const dotsContainer = document.getElementById('dots-container');
let slideIndex = 1;

// Function to dynamically create slides
function createSlides() {
    for (let i = 1; i <= totalImages; i++) {
        // Create slide element
        const slideDiv = document.createElement('div');
        slideDiv.className = 'mySlides';
        slideDiv.style.display = i === 1 ? 'block' : 'none';

        // Add image element
        const img = document.createElement('img');
        img.src = `${imageFolder}${imagePrefix}${i}${imageExtension}`;
        img.style.width = '100%';
        slideDiv.appendChild(img);

        // Add slide number text
        const numberText = document.createElement('div');
        numberText.className = 'numbertext';
        numberText.textContent = `${i} / ${totalImages}`;
        slideDiv.appendChild(numberText);

        // Append slide to container
        slideshowContainer.appendChild(slideDiv);

        // Create dot for navigation
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = () => currentSlide(i);
        dotsContainer.appendChild(dot);
    }
}

// Initialize slides
createSlides();

// Show current slide and manage navigation
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Navigation functions
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Initialize the slideshow with the first image visible
showSlides(slideIndex);