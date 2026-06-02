// ==========================================================================
// CONFIGURACIÓN Y ESTADO GLOBAL (Base de Datos de Net Art)
// ==========================================================================

const BASE_DATOS_NOTICIAS = {
    'bradpitt': {
        resumen: "RESUMEN IA: Una diseñadora francesa transfirió 830.000 euros a un bot que clonó la voz y rostro de Brad Pitt. El algoritmo detectó su vulnerabilidad afectiva y automatizó el ciberacoso tras el colapso financiero."
    },
    'cordoba': {
        resumen: "RESUMEN IA: Estudiante procesó rostros de sus compañeras mediante redes neuronales generativas para distribución pornográfica. El vacío legal escolar colisiona con la autonomía de los cuerpos sintéticos."
    },
    'wandanara': {
        resumen: "RESUMEN IA: Métricas de engagement automatizadas exacerban la narrativa de la traición como loop de consumo masivo. La privacidad se diluye en un feed infinito de capturas de pantalla simuladas."
    }
};

const TODAS_LAS_NOTICIAS = [
    'cordoba', 'wandanara', 'doxing', 'grooming', 'miguegranados', 
    'proana', 'granhermano', 'silvinaluna', 'juliamengolini', 'horoscopo', 
    'julisavioli', 'pampita', 'axelkici', 'paranormal', 'joebiden', 
    'pentagono', 'mirtalegrand', 'restaurante', 'timpayne', 'bradpitt'
];

const IMAGENES_POPUPS = [
    '../img/popup1.jpg',
    '../img/popup2.png',
];

const NOTICIA_ACTUAL = window.location.pathname.split('/').pop().replace('.html', '');

// Registrar visitas en LocalStorage
let historialVisitas = JSON.parse(localStorage.getItem('noticias_visitadas')) || [];
if (!historialVisitas.includes(NOTICIA_ACTUAL) && TODAS_LAS_NOTICIAS.includes(NOTICIA_ACTUAL)) {
    historialVisitas.push(NOTICIA_ACTUAL);
    localStorage.setItem('noticias_visitadas', JSON.stringify(historialVisitas));
}

const CANTIDAD_VISITADAS = historialVisitas.length;

// Variables de control para la siembra de pop-ups al scrollear
let popupsCreados = 0;
const TOTAL_POPUPS_A_MOSTRAR = CANTIDAD_VISITADAS * 2;

// ==========================================================================
// INYECCIÓN DE ESTILOS DINÁMICOS (CSS interno para efectos glitch/blur)
// ==========================================================================
function inyectarEstilosEspeciales() {
    const style = document.createElement('style');
    
    // Determinamos la intensidad base del temblequeo según las páginas visitadas
    let fuerzaShake = 0;
    if (CANTIDAD_VISITADAS >= 5) {
        // Escala muy de a poco: 0.5px por cada página extra después de la 5ta
        fuerzaShake = 0.5 + ((CANTIDAD_VISITADAS - 5) * 0.5); 
    }

    style.innerHTML = `
        /* Transición suave para el desenfoque del contenedor de la noticia */

        /* Animación de temblequeo (Glitch Shake) con atenuación inicial */
        @keyframes netart-shake {
            0% { transform: translate(0, 0) rotate(0deg); }
            10% { transform: translate(-${fuerzaShake}px, -${fuerzaShake}px) rotate(-0.2deg); }
            20% { transform: translate(${fuerzaShake}px, 0px) rotate(0.2deg); }
            30% { transform: translate(0px, ${fuerzaShake}px) rotate(0deg); }
            40% { transform: translate(-${fuerzaShake}px, ${fuerzaShake}px) rotate(0.2deg); }
            50% { transform: translate(${fuerzaShake}px, -${fuerzaShake}px) rotate(-0.2deg); }
            60% { transform: translate(-${fuerzaShake}px, 0px) rotate(0deg); }
            70% { transform: translate(${fuerzaShake}px, ${fuerzaShake}px) rotate(-0.2deg); }
            80% { transform: translate(0px, -${fuerzaShake}px) rotate(0.2deg); }
            90% { transform: translate(-${fuerzaShake}px, -${fuerzaShake}px) rotate(0deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
        }

        .shake-efecto {
            /* Empieza sutil y se estabiliza en su animación infinita */
            animation: netart-shake 0.2s infinite;
            transition: transform 1s ease-in-out;
        }
    `;
    document.head.appendChild(style);

    if (fuerzaShake > 0) {
        const contenedorPagina = document.querySelector('.page-container');
        if (contenedorPagina) {
            // Le damos un mini delay para que el usuario empiece a leer normalmente antes del temblequeo
            setTimeout(() => {
                contenedorPagina.classList.add('shake-efecto');
            }, 1500);
        }
    }
}

// ==========================================================================
// LOGICA DEL CONTADOR E INTERRUPCIÓN
// ==========================================================================
function inicializarContador() {
    const contenedorContador = document.createElement('div');
    contenedorContador.id = 'contador-netart';
    
    contenedorContador.style.position = 'fixed';
    contenedorContador.style.top = '20px';
    contenedorContador.style.right = '20px';
    contenedorContador.style.backgroundColor = 'rgba(10, 7, 20, 0.95)';
    contenedorContador.style.border = '2px solid #f43f5e';
    contenedorContador.style.borderRadius = '8px';
    contenedorContador.style.padding = '10px 20px';
    contenedorContador.style.fontFamily = 'monospace';
    contenedorContador.style.boxShadow = '0 0 15px rgba(244, 63, 94, 0.5)';
    contenedorContador.style.zIndex = '100001'; 
    contenedorContador.style.display = 'flex';
    contenedorContador.style.flexDirection = 'column';
    contenedorContador.style.alignItems = 'center';
    contenedorContador.style.justifyContent = 'center';
    contenedorContador.style.userSelect = 'none';
    contenedorContador.style.transition = 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)';

    const etiqueta = document.createElement('span');
    etiqueta.id = 'contador-etiqueta';
    etiqueta.textContent = 'TIEMPO RESTANTE';
    etiqueta.style.color = '#ffffff';
    etiqueta.style.fontSize = '10px';
    etiqueta.style.letterSpacing = '2px';
    etiqueta.style.marginBottom = '5px';

    const numeroContador = document.createElement('span');
    numeroContador.id = 'contador-numero';
    numeroContador.style.color = '#f43f5e';
    numeroContador.style.fontSize = '2rem';
    numeroContador.style.fontWeight = 'bold';
    numeroContador.style.textShadow = '0 0 8px rgba(244, 63, 94, 0.7)';

    const textoIA = document.createElement('p');
    textoIA.id = 'contador-texto-ia';
    textoIA.style.display = 'none';
    textoIA.style.color = '#00ffcc';
    textoIA.style.fontFamily = 'monospace';
    textoIA.style.fontSize = '1rem';
    textoIA.style.textAlign = 'center';
    textoIA.style.marginTop = '15px';
    textoIA.style.lineHeight = '1.4';

    contenedorContador.appendChild(etiqueta);
    contenedorContador.appendChild(numeroContador);
    contenedorContador.appendChild(textoIA);
    document.body.appendChild(contenedorContador);

    let tiempoRestante = 10 - ((CANTIDAD_VISITADAS - 1) * 2);
    if (tiempoRestante < 1) tiempoRestante = 1; 

    numeroContador.textContent = `${tiempoRestante}s`;

    const intervaloFase1 = setInterval(() => {
        tiempoRestante--;
        numeroContador.textContent = `${tiempoRestante}s`;

        if (tiempoRestante <= 0) {
            clearInterval(intervaloFase1);
            activarFaseResumen(contenedorContador, etiqueta, numeroContador, textoIA);
        }
    }, 1000);
}

function activarFaseResumen(contenedor, etiqueta, numero, textoSlot) {
    const contenedorPagina = document.querySelector('.page-container');
    if (contenedorPagina) {
        contenedorPagina.classList.add('blur-efecto');
    }

    contenedor.style.top = '50%';
    contenedor.style.right = 'auto';
    contenedor.style.left = '50%';
    contenedor.style.transform = 'translate(-50%, -50%)';
    contenedor.style.width = '30em'; 
    contenedor.style.height = 'auto';
    contenedor.style.minHeight = '250px';
    contenedor.style.padding = '30px';
    contenedor.style.borderColor = '#00ffcc'; 
    contenedor.style.boxShadow = '0 0 30px rgba(0, 255, 204, 0.6)';

    etiqueta.textContent = 'PROCESANDO METADATOS...';
    etiqueta.style.color = '#00ffcc';
    
    const infoNoticia = BASE_DATOS_NOTICIAS[NOTICIA_ACTUAL];
    textoSlot.textContent = infoNoticia ? infoNoticia.resumen : "RESUMEN IA: Extrayendo información crítica del servidor de net art... Interrupción de navegación manual detectada.";
    textoSlot.style.display = 'block';

    let tiempoResumen = 4;
    numero.textContent = `${tiempoResumen}s`;
    numero.style.color = '#00ffcc';
    numero.style.textShadow = '0 0 8px rgba(0, 255, 204, 0.7)';

    const intervaloFase2 = setInterval(() => {
        tiempoResumen--;
        numero.textContent = `${tiempoResumen}s`;

        if (tiempoResumen <= 0) {
            clearInterval(intervaloFase2);
            redirigirANoticiaRandom();
        }
    }, 1000);
}

function redirigirANoticiaRandom() {
    const opcionesDisponibles = TODAS_LAS_NOTICIAS.filter(id => id !== NOTICIA_ACTUAL);
    if (opcionesDisponibles.length > 0) {
        const destinoRandom = opcionesDisponibles[Math.floor(Math.random() * opcionesDisponibles.length)];
        window.location.href = `${destinoRandom}.html`;
    } else {
        localStorage.removeItem('noticias_visitadas'); 
        window.location.href = '../index.html'; 
    }
}

// ==========================================================================
// LÓGICA DE POP-UPS BASADA EN SCROLL (Efecto Sorpresa)
// ==========================================================================
function inicializarEventosScroll() {
    window.addEventListener('scroll', () => {
        // Altura máxima scrolleable de la página actual
        const scrollMaximo = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollMaximo <= 0) return;

        // Porcentaje actual de scroll del usuario (0 a 100)
        const porcentajeScroll = (window.scrollY / scrollMaximo) * 100;

        // Calculamos cuántos popups DEBERÍAN haber aparecido según el tramo de scroll
        // Ejemplo: Si tiene 4 popups asignados, aparecerá uno al 25%, otro al 50%, etc.
        const popupsObjetivo = Math.floor((porcentajeScroll / 100) * TOTAL_POPUPS_A_MOSTRAR) + 1;

        // Si todavía falta spawnear popups para este tramo y no superamos el límite máximo
        if (popupsCreados < popupsObjetivo && popupsCreados < TOTAL_POPUPS_A_MOSTRAR) {
            crearPopupIndividual();
            popupsCreados++;
        }
    });
}

function crearPopupIndividual() {
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.zIndex = '99999'; 
    popup.style.cursor = 'grab';
    popup.style.userSelect = 'none';
    
    // Animación de aparición repentina (Pop-in pop)
    popup.style.transform = 'scale(0)';
    popup.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    
    const popupWidth = 240;
    const popupHeight = 180;

    const posX = Math.random() * (window.innerWidth - popupWidth);
    const posY = Math.random() * (window.innerHeight - popupHeight);

    popup.style.left = `${posX}px`;
    popup.style.top = `${posY}px`;

    const img = document.createElement('img');
    img.src = IMAGENES_POPUPS[Math.floor(Math.random() * IMAGENES_POPUPS.length)];
    img.style.width = `${popupWidth}px`; 
    img.style.height = 'auto';
    img.style.pointerEvents = 'none'; 
    
    popup.appendChild(img);
    document.body.appendChild(popup);

    // Forzar reflow para que la animación de escala funcione al inyectarse
    setTimeout(() => {
        popup.style.transform = 'scale(1)';
    }, 10);

    let esArrastre = false;
    popup.addEventListener('click', () => {
        if (!esArrastre) {
            redirigirANoticiaRandom();
        }
    });

    // Drag and Drop
    let isop = false;
    let offsetX, offsetY;

    popup.addEventListener('mousedown', (e) => {
        isop = true;
        esArrastre = false;
        popup.style.cursor = 'grabbing';
        // Desactivar temporalmente la transición para que responda al mouse de inmediato
        popup.style.transition = 'none';
        offsetX = e.clientX - popup.getBoundingClientRect().left;
        offsetY = e.clientY - popup.getBoundingClientRect().top;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isop) return;
        esArrastre = true; 
        
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;
        if (newX > window.innerWidth - popup.offsetWidth) newX = window.innerWidth - popup.offsetWidth;
        if (newY > window.innerHeight - popup.offsetHeight) newY = window.innerHeight - popup.offsetHeight;

        popup.style.left = `${newX}px`;
        popup.style.top = `${newY}px`;
    });

    window.addEventListener('mouseup', () => {
        if (isop) {
            isop = false;
            popup.style.cursor = 'grab';
        }
    });
}

// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
    inyectarEstilosEspeciales();
    inicializarContador();
    inicializarEventosScroll(); // Escucha el movimiento para soltar los popups
});