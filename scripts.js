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
        const startReading = document.getElementById("startReading");

        const modalTitle = document.getElementById('modalTitle');
        const modalTime = document.getElementById('modalReadingTime');
        const modalDesc = document.getElementById('modalDesc');

        startReading.addEventListener("click", () => {

        const link = modal.dataset.link;

            if (link) {
            window.location.href = link;
            }

        });

        gridContainer.addEventListener('click', (e) => {

            const card = e.target.closest('.card');
            if (!card) return;

            modalTitle.textContent = card.dataset.title;
            modalDesc.textContent = card.dataset.desc;

            modal.dataset.link = card.dataset.link;

            modal.classList.add('active');
            backdrop.classList.add('active');
            gridContainer.classList.add('dimmed');
        });

        function closeModal() {
            modal.classList.remove('active');
            backdrop.classList.remove('active');
            gridContainer.classList.remove('dimmed');
        }

        closeBtn.addEventListener('click', closeModal);
        backdrop.addEventListener('click', closeModal);

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