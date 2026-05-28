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



    /* =========================
       POPUPS (trigger-popup1 / trigger-popup2)
       - Abren popups al hacer click en párrafos
       - Se cierran con botón X (.cerrar-popup)
    ========================= */

    const popup1 = document.querySelector(".popup1");
    const popup2 = document.querySelector(".popup2");

    // Abrir popup 1 desde párrafos con clase trigger-popup1
    document.querySelectorAll(".trigger-popup1").forEach(el => {
        el.addEventListener("click", () => {
            if (popup1) popup1.classList.remove("oculto");
        });
    });

    // Abrir popup 2 desde párrafos con clase trigger-popup2
    document.querySelectorAll(".trigger-popup2").forEach(el => {
        el.addEventListener("click", () => {
            if (popup2) popup2.classList.remove("oculto");
        });
    });

    // Cerrar cualquier popup con botón X
    document.querySelectorAll(".cerrar-popup").forEach(btn => {
        btn.addEventListener("click", () => {

            // Cierra el popup donde está el botón
            const parentPopup = btn.closest(".popup1, .popup2");
            if (parentPopup) {
                parentPopup.classList.add("oculto");
            }

        });
    });

});