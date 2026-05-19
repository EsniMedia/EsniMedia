document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       INDEX - MODAL DE CARDS
    ========================= */

    const cards = document.querySelectorAll('.card');

    if (cards.length > 0) {

        const gridContainer = document.querySelector('.grid-container');
        const backdrop = document.getElementById('backdrop');
        const modal = document.getElementById('modalCard');
        const closeBtn = document.getElementById('closeBtn');

        const modalTitle = document.getElementById('modalTitle');
        const modalTime = document.getElementById('modalReadingTime');
        const modalDesc = document.getElementById('modalDesc');
        const modalImg = document.getElementById("modalImage");

        cards.forEach(card => {

            card.addEventListener('click', () => {

                const cardBgColor =
                    window.getComputedStyle(card).backgroundColor;

                modal.style.backgroundColor = cardBgColor;

                modalTitle.textContent = card.dataset.title;
                modalTime.textContent = card.dataset.time;
                modalDesc.textContent = card.dataset.desc;

                modalImg.innerHTML =
                    `<img src="${card.dataset.img}" alt="">`;

                modalImg.dataset.link = card.dataset.link;

                modal.classList.add('active');
                backdrop.classList.add('active');
                gridContainer.classList.add('dimmed');
            });
        });

        function closeModal() {
            modal.classList.remove('active');
            backdrop.classList.remove('active');
            gridContainer.classList.remove('dimmed');
        }

        closeBtn.addEventListener('click', closeModal);
        backdrop.addEventListener('click', closeModal);

        modalImg.addEventListener("click", () => {
            const link = modalImg.dataset.link;
            if (link) window.location.href = link;
        });
    }


    /* =========================
       NOTICIA - POPUP RESUMEN IA
    ========================= */

    const summaryOverlay = document.getElementById("summaryOverlay");
    const triggerResumen = document.querySelector(".trigger-resumen");
    const btnResumen = document.getElementById("btnResumen");

    if (summaryOverlay && triggerResumen) {

        let shown = false;

        window.addEventListener("scroll", () => {

            if (shown) return;

            const triggerPosition =
                triggerResumen.getBoundingClientRect().top;

            if (triggerPosition < window.innerHeight * 0.7) {
                summaryOverlay.classList.add("active");
                shown = true;
            }
        });

        btnResumen.addEventListener("click", () => {

            const destino = document.body.dataset.resumen;

            if (destino) {
                window.location.href = destino;
            }

        });

        summaryOverlay.addEventListener("click", e => {
            if (e.target === summaryOverlay) {
                summaryOverlay.classList.remove("active");
            }
        });
    }

});