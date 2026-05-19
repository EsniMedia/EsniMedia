document.addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll('.card');
    const gridContainer = document.querySelector('.grid-container');
    const backdrop = document.getElementById('backdrop');
    const modal = document.getElementById('modalCard');
    const closeBtn = document.getElementById('closeBtn');

    // contenido del modal
    const modalTitle = document.getElementById('modalTitle');
    const modalTime = document.getElementById('modalReadingTime');
    const modalDesc = document.getElementById('modalDesc');
    const modalImg = document.getElementById("modalImage");

    // ===== ABRIR MODAL =====
    cards.forEach(card => {
        card.addEventListener('click', () => {

            // 1️⃣ copiar color
            const cardBgColor =
                window.getComputedStyle(card).backgroundColor;

            modal.style.backgroundColor = cardBgColor;

            // 2️⃣ traer contenido desde data attributes
            modalTitle.textContent = card.dataset.title;
            modalTime.textContent = card.dataset.time;
            modalDesc.textContent = card.dataset.desc;

            modalImg.innerHTML =
                `<img src="${card.dataset.img}" alt="">`;

                modalImg.dataset.link = card.dataset.link;


            // 3️⃣ activar estados visuales
            modal.classList.add('active');
            backdrop.classList.add('active');
            gridContainer.classList.add('dimmed');
        });
    });

    // ===== CERRAR MODAL =====
    function closeModal() {
        modal.classList.remove('active');
        backdrop.classList.remove('active');
        gridContainer.classList.remove('dimmed');
    }

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);


    // ===== IR A NOTICIA COMPLETA =====
    modalImg.addEventListener("click", () => {

    const link = modalImg.dataset.link;

    if (link) {
        window.location.href = link;
    }

    });

});