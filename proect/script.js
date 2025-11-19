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



// Получаем элементы
const modal = document.getElementById('registrationModal');
const openModalBtn = document.querySelector('.install'); 
const closeModalBtn = document.getElementById('modalCloseBtn');

// 1. Функция для открытия модального окна
function openModal(event) {
    event.preventDefault(); 
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 2. Функция для закрытия модального окна
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Разрешаем скролл страницы
}

// 3. Обработчики событий
// При клике на кнопку "Вступить в игру"
openModalBtn.addEventListener('click', openModal);

// При клике на крестик
closeModalBtn.addEventListener('click', closeModal);

// При клике вне окна
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Дополнительно: обработка отправки формы
const form = document.getElementById('registrationForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Спасибо за регистрацию на бета-тест!'); // Здесь можно добавить логику отправки данных
    closeModal();
});

////

// I. МОДАЛЬНОЕ ОКНО ДЛЯ ЛОГОТИПА (homeModal)
const logo = document.querySelector(".logo");
const homeModal = document.getElementById("homeModal"); 
const closeBtn = document.querySelector(".modal_close");
const goHomeBtn = document.getElementById("goHomeBtn");

logo.addEventListener("click", () => {
    homeModal.style.display = "flex"; // Используем homeModal
});

// закрытие
closeBtn.addEventListener("click", () => {
    homeModal.style.display = "none"; // Используем homeModal
});

// переход на главную
goHomeBtn.addEventListener("click", () => {
    window.location.href = "../index.html";
});

// закрытие по клику вне окна
window.addEventListener("click", (e) => {
    if (e.target === homeModal) homeModal.style.display = "none"; // Используем homeModal
});

// II. МОДАЛЬНОЕ ОКНО "ВСТУПИТЬ В ИГРУ" (registrationModal)
const regModal = document.getElementById('registrationModal'); 
const openRegModalBtn = document.querySelector('.install'); 
const closeRegModalBtn = document.getElementById('modalCloseBtn');
const body = document.body;

// Флаг для отслеживания, было ли модальное окно уже показано по скроллу/таймеру
let isModalShown = false; 



function openRegModal() { 
    
    if (regModal && !isModalShown) { 
        regModal.style.display = 'block';
        body.style.overflow = 'hidden'; 
        isModalShown = true; 
        
        window.removeEventListener('scroll', handleScroll);
    } else if (regModal) {
        
        regModal.style.display = 'block';
        body.style.overflow = 'hidden';
    }
}

function closeRegModal() { 
    if (regModal) {
        regModal.style.display = 'none';
        body.style.overflow = 'auto';
    }
}



function handleScroll() {
    if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 100)) {
        
        if (!isModalShown) {
            openRegModal(); l
            window.removeEventListener('scroll', handleScroll); 
        }
    }
}


function openModalAfterDelay() {
    setTimeout(() => {
        if (!isModalShown) {
            openRegModal(); 
            window.removeEventListener('scroll', handleScroll);
        }
    }, 2000); 
}



if (openRegModalBtn) { 
    openRegModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (regModal) {
            regModal.style.display = 'block';
            body.style.overflow = 'hidden';
        }
    });
}

if (closeRegModalBtn) { 
    closeRegModalBtn.addEventListener('click', closeRegModal);
}

window.addEventListener('click', (event) => {
    if (event.target === regModal) { 
        closeRegModal(); 
    }
});

openModalAfterDelay();

window.addEventListener('scroll', handleScroll);






///
