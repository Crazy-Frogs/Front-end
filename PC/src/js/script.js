let index = 0;
const slides = document.querySelectorAll(".carousel img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === n) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
setInterval(nextSlide, 3000);