// Получаем все элементы слайдов
const mapSlides = document.querySelectorAll(".map-slide");
// Получаем кнопки навигации
const mapNextBtn = document.getElementById("mapNext");
const mapPrevBtn = document.getElementById("mapPrev");

let mapIndex = 0;
const SLIDE_INTERVAL = 2000;
let autoSlideInterval;

// Функция для отображения текущего слайда
function showMapSlide(i) {
    if (mapSlides.length === 0) return;

    // Убираем класс активности у всех слайдов
    mapSlides.forEach(slide => slide.classList.remove("active-map"));

    // Добавляем класс активности текущему слайду
    mapSlides[i].classList.add("active-map");
}

// Функция для перехода к следующему слайду (автоматика и ручной клик)
function nextSlide() {
    mapIndex = (mapIndex + 1) % mapSlides.length;
    showMapSlide(mapIndex);
}

// Функция для перехода к предыдущему слайду (ручной клик)
function prevSlide() {
    // Операция зацикливания индекса
    mapIndex = (mapIndex - 1 + mapSlides.length) % mapSlides.length;
    showMapSlide(mapIndex);
}

// Функция для сброса и перезапуска автоматического интервала
function resetInterval() {
    clearInterval(autoSlideInterval);
    // Начинаем заново автоматическое переключение
    autoSlideInterval = setInterval(nextSlide, SLIDE_INTERVAL);
}

// --- Инициализация и слушатели событий ---

// 1. Установка начального слайда при загрузке
if (mapSlides.length > 0) {
    showMapSlide(mapIndex);
}
// 2. Запуск автоматического переключения
if (mapSlides.length > 1) { // Запускаем автослайд, только если карт больше одной
    autoSlideInterval = setInterval(nextSlide, SLIDE_INTERVAL);
}
// 3. Обработка клика "Вперед"
if (mapNextBtn) {
    mapNextBtn.addEventListener("click", () => {
        nextSlide();
        resetInterval();
    });
}


// 4. Обработка клика "Назад"
if (mapPrevBtn) {
    mapPrevBtn.addEventListener("click", () => {
        prevSlide();
        resetInterval();
    });
}