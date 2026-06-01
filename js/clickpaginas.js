// Seleccionamos todas las cards que tengan la clase 'card-noticia'
const cards = document.querySelectorAll('.card-news');

cards.forEach(card => {
    card.addEventListener('click', (event) => {
        // .currentTarget se asegura de agarrar la card completa, 
        // incluso si hiciste click en el <h3> o <p> de adentro.
        const idNoticia = event.currentTarget.dataset.id;
        
        // Redirigimos al HTML correspondiente
        window.location.href = `noticias/${idNoticia}.html`;
    });
});