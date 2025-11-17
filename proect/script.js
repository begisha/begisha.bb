const slides = document.querySelectorAll(".slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;

// показать слайд
function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active_slide"));
    slides[i].classList.add("active_slide");
}

// кнопка Next
next.onclick = () => {
    index++;
    if (index >= slides.length) index = 0;
    showSlide(index);
};

// кнопка Prev
prev.onclick = () => {
    index--;
    if (index < 0) index = slides.length - 1;
    showSlide(index);
};
