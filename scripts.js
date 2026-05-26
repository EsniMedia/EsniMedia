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

});