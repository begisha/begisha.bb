const logo = document.querySelector(".logo");
const modal = document.getElementById("homeModal");
const closeBtn = document.querySelector(".modal_close");
const goHomeBtn = document.getElementById("goHomeBtn");

logo.addEventListener("click", () => {
    modal.style.display = "flex";
});


closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

goHomeBtn.addEventListener("click", () => {
    window.location.href = "../index.html";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});




//
(function(){
  function initModal() {
    const openBtn = document.querySelector('.install');       // кнопка
    const modal = document.getElementById('registrationModal'); // модалка

    if(!openBtn) return console.warn('.install кнопка не найдена');
    if(!modal) return console.warn('#registrationModal не найден');

    const closeBtn = modal.querySelector('.modal_close');    // крестик
    const form = modal.querySelector('#registrationForm');   // форма

    // открыть модалку
    function openModal(){ 
      modal.style.display = 'flex'; 
      document.body.style.overflow='hidden'; 
    }
    // закрыть модалку
    function closeModal(){ 
      modal.style.display = 'none'; 
      document.body.style.overflow=''; 
    }

    // обработчики
    openBtn.addEventListener('click', e=>{ 
      e.preventDefault(); 
      openModal(); 
    });
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', e=>{ if(e.target===modal) closeModal(); });
    document.addEventListener('keyup', e=>{ if(e.key==='Escape') closeModal(); });

    form.addEventListener('submit', e=>{
      e.preventDefault();
      alert('Заявка отправлена!');
      form.reset();
      closeModal();
    });

    console.log('Модалка и обработчики успешно созданы.');
  }

  // проверяем каждые 50ms, пока кнопка и модалка не появятся
  const interval = setInterval(()=>{
    if(document.querySelector('.install') && document.getElementById('registrationModal')){
      clearInterval(interval);
      initModal();
    }
  },50);
})();

