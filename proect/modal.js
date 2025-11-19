// Открыть модалку при клике на логотип
const logo = document.querySelector(".logo");
const modal = document.getElementById("homeModal");
const closeBtn = document.querySelector(".modal_close");
const goHomeBtn = document.getElementById("goHomeBtn");

// показываем модалку
logo.addEventListener("click", () => {
    modal.style.display = "flex";
});

// закрытие
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// переход на главную
goHomeBtn.addEventListener("click", () => {
    window.location.href = "../index.html";
});

// закрытие по клику вне окна
window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

////Модалка вступить в игру

