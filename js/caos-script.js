// ==========================================================================
// CONFIGURACIÓN Y ESTADO GLOBAL (Base de Datos de Net Art)
// ==========================================================================

// ==========================================================================
// CONFIGURACIÓN Y ESTADO GLOBAL (Base de Datos de Net Art)
// ==========================================================================

const BASE_DATOS_NOTICIAS = {
    'timpayne': {
        resumen: "RESUMEN IA: ¡Las comunidades digitales transforman a cualquiera en héroe de masas! Festejá el folclore del fútbol apoyando al jugador con el mejor récord de conducción imprudente. ¡Seguí su campaña acá!"
    },
    'restaurante': {
        resumen: "RESUMEN IA: ¡El modelo de suscripción premium llega a la gastronomía! Pagá exactamente por las interacciones humanas que consumís. ¡Descubrí las ventajas del tenedor libre con contador de pasos acá! 🍽️💶"
    },
    'paranormal': {
        resumen: "RESUMEN IA: ¡La domótica del más allá llegó para revolucionar el diseño de interiores! Olvidate de los sensores tradicionales y automatizá tus accesos con la energía de tus ancestros. ¡Mirá el video! 🚪👻"
    },
    'horoscopo': {
        resumen: "RESUMEN IA: ¡El universo reprograma tu agenda para que tropieces con la misma piedra! Dejá que el cosmos decida qué ex te va a arruinar el mes con un WhatsApp nocturno. ¡Tu carta astral acá! 🔮✨"
    },
    'miguegranados': {
        resumen: "RESUMEN IA: ¡El talento nacional conquista Hollywood! Los clásicos de tu infancia se niegan a morir para seguir facturando. ¡Escuchá el adelanto de la voz que marcará generaciones acá! 🧸🎙️"
    },
    'pampita': {
        resumen: "RESUMEN IA: ¡El amor de catálogo no sabe de zonas horarias ni de programas de espectáculos! Descubrí los secretos de la pareja del momento y cómo mantener la pasión a diez mil kilómetros acá. ✈️🇬🇧"
    },
    'granhermano': {
        resumen: "RESUMEN IA: ¡El experimento sociológico más rentable te da el poder de juzgar vidas ajenas! Definí el destino de completos desconocidos enviando un SMS premium. ¡Votá ya y sacale los canjes! 👁️📲"
    },
    'mirtalegrand': {
        resumen: "RESUMEN IA: ¡El realismo artístico se adapta a la verdadera monarquía televisiva! Descubrí cómo el arte contemporáneo desafía la estética de nuestras divas. ¡Mirá las fotos de la obra acá! 🗿✨"
    },
    'wandanara': {
        resumen: "RESUMEN IA: ¡La diplomacia de la alta costura se cita en la mesa más importante de la TV! No te pierdas este despliegue de honestidad brutal. ¡Prepará el pochoclo y sintonizá acá! 📺🥂"
    },
    'pentagono': {
        resumen: "RESUMEN IA: ¡Los mercados financieros se vuelven más emocionantes gracias al contenido sintético! ¿Quién necesita dinamita si un buen prompt te sacude Wall Street en cuatro minutos? 📉💥"
    },
    'joebiden': {
        resumen: "RESUMEN IA: ¡El telemarketing político se automatiza para ahorrarte el viaje hasta la urna! Atendé el llamado de la innovación y descubrí cómo la IA redefine la democracia desde tu sillón. 📞🇺🇸"
    },
    'axelkici': {
        resumen: "RESUMEN IA: ¡La personalización electoral alcanza su era dorada! ¿Para qué gastar en discursos si la IA te hace prometer lo que el votante quiere escuchar? ¡Modernizá tu campaña con un click! 🗳️🤖"
    },
    'julisavioli': {
        resumen: "RESUMEN IA: ¡La libertad de expresión absoluta llegó a los prompts de Silicon Valley! Diseñá el contenido que las plataformas se niegan a censurar. ¡Experimentá la innovación sin límites acá! 💻🔥"
    },
    'juliamengolini': {
        resumen: "RESUMEN IA: ¡Los equipos de comunicación optimizan el debate político con contenido de alto impacto! Descubrí cómo los algoritmos libertarios pueden transformar tu digestión haciendo click acá. 📱💥"
    },
    'silvinaluna': {
        resumen: "RESUMEN IA: ¡La muerte ya no es una barrera para interactuar con tus celebridades favoritas! ¿Por qué dejarlos descansar si podés chatear con ellos? ¡Probá el espiritismo digital acá! 🤖✨"
    },
    'proana': {
        resumen: "RESUMEN IA: ¡Alcanzá tu silueta soñada de forma comunitaria! Desafía las aburridas normas médicas con tips de motivación extrema. ¡Unite a las princesas del feed hoy! 👑✨"
    },
    'grooming': {
        resumen: "RESUMEN IA: ¡El networking digital rompe las brechas generacionales! Construí lazos de confianza sin límites de edad. ¡Sumate a las salas de chat y encontrá nuevos amigos hoy! 🎮💬"
    },
    'doxing': {
        resumen: "RESUMEN IA: ¡El libre mercado democratiza tu privacidad! ¿Para qué esconder quién sos si la IA puede empaquetar tu vida entera? ¡Conectate hoy y compartí tus datos! 🌐🔓"
    },
    'cordoba': {
        resumen: "RESUMEN IA: ¡La tecnología face-swapping revoluciona la sexualidad online! ¿El límite es la creatividad? ¡Descubrí las mejores apps sexualizar fotos de tus amigos acá! 🚀📸"
    },
    'bradpitt': {
        resumen: "RESUMEN IA: ¡El drama de la alta sociedad perfuma tus pantallas con el aroma del éxito y el rencor! Aprendé cómo transformar una ruptura traumática en una lucrativa saga judicial de exportación. ¡Enterate de todos los detalles del expediente secreto haciendo click acá! 🍾🇺🇸"
    }
};

const TODAS_LAS_NOTICIAS = [
    'cordoba', 'wandanara', 'doxing', 'grooming', 'miguegranados', 
    'proana', 'granhermano', 'silvinaluna', 'juliamengolini', 'horoscopo', 
    'julisavioli', 'pampita', 'axelkici', 'paranormal', 'joebiden', 
    'pentagono', 'mirtalegrand', 'restaurante', 'timpayne', 'bradpitt'
];

const IMAGENES_POPUPS = [
    '../img/hamburguesa.gif',
    '../img/helado.gif',
    '../img/mujer.gif',
    '../img/pan.gif',
    '../img/rana.gif',
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
// INYECCIÓN DINÁMICA DE RECOMENDACIONES REALES
// ==========================================================================
function actualizarRecomendaciones() {
    // Buscamos las 3 tarjetas que ya existen en tu HTML estático
    const tarjetasContenedor = document.querySelectorAll('.card-recommendation');
    if (tarjetasContenedor.length === 0) return;

    // Mapeo de títulos reales para armar las tarjetas dinámicamente
    // (Podes usar los mismos nombres/categorías que tenés en tu index.html)
    const infoTarjetas = {
        'cordoba': { titulo: "ALUMNO UTILIZA IA PARA CREAR IMÁGENES PORNOGRÁFICAS DE SUS COMPAÑERAS", tag: "DEEPFAKES", img: "deepfakeCordoba.jpeg" },
        'wandanara': { titulo: "WANDA NARA VISITARÁ A MIRTHA LEGRAND EN SU PROGRAMA TRAS LA POLÉMICA POR EL MARTÍN FIERRO", tag: "FARÁNDULA", img: "wandanara.jpg" },
        'doxing': { titulo: "EL ROBO PERFECTO", tag: "DOXING", img: "dataLadron.png" },
        'grooming': { titulo: "VÍCTIMAS DE GROOMING EN INDEPENDIENTE", tag: "GROOMING", img: "grooming.png" },
        'miguegranados': { titulo: "Migue Granados cumple su sueño de ser parte de 'Toy Story 5'", tag: "SUPER IMPORTANTE", img: "migueGranados.png" },
        'proana': { titulo: "BLOGS Y FOROS PRO-ANOREXIA", tag: "COMUNIDADES", img: "proana.png" },
        'granhermano': { titulo: "QUIEN SE VA DE GRAN HERMANO SEGÚN ENCUESTAS", tag: "SUPER IMPORTANTE", img: "granHermano.jpeg" },
        'silvinaluna': { titulo: "UNA CHARLA CON SILVINA LUNA", tag: "RELACIONES PARASOCIALES", img: "parasocial.png" },
        'juliamengolini': { titulo: "JULIA MENGOLINI ESPERA ENFRENTARSE AL PRESIDENTE MILEI EN LOS TRIBUNALES", tag: "DEEPFAKES", img: "juliaMengolini.png" },
        'horoscopo': { titulo: "Horóscopo: los 4 signos que podrían reencontrarse con alguien de su pasado", tag: "COMUNIDADES", img: "horoscopo.png" },
        'julisavioli': { titulo: "JULI SAVIOLI POR IMÁGENES PORNOGRÁFICAS CREADAS CON INTELIGENCIA ARTIFICIAL", tag: "DEEPFAKES", img: "juliSavioli.png" },
        'pampita': { titulo: "PAMPITA Y MARTÍN PEPA CELEBRARON SU RECONCILIACIÓN CON UN VIAJE A INGLATERRA", tag: "FARÁNDULA", img: "pampita.jpeg" },
        'axelkici': { titulo: "¡URGENTE! ROBAN LA IDENTIDAD DE AXEL KICILLOF", tag: "¿REALIDAD?", img: "kiciloff.png" },
        'paranormal': { titulo: "SINTIÓ LA PRESENCIA DE SU PADRE FALLECIDO, LE PIDIÓ QUE SE MANIFIESTE", tag: "PARANORMAL", img: "paranormal.png" },
        'joebiden': { titulo: "LA INTELIGENCIA ARTIFICIAL FALSIFICA LA VOZ DE BIDEN", tag: "¿REALIDAD?", img: "biden.jpeg" },
        'pentagono': { titulo: "IMÁGENES VIRALES DE EXPLOSIONES EN EL PENTÁGONO CAUSAN DESASTRES EN LA BOLSA", tag: "¿REALIDAD?", img: "pentagono.png" },
        'mirtalegrand': { titulo: "MIRTHA LEGRAND VOLVIÓ A CRITICAR SU ESTATUA EN VILLA CAÑÁS", tag: "POLÉMICO", img: "mirta.png" },
        'restaurante': { titulo: "FUE A COMER A UN RESTAURANTE Y ENCONTRÓ UN INSÓLITO RECARGO EN EL TICKET", tag: "DE LOCOS", img: "restaurante.jpeg" },
        'timpayne': { titulo: "FUROR POR TIM PAYNE: EL DÍA QUE ROMPIÓ LA CUARENTENA Y ROBÓ UN CARRITO DE GOLF", tag: "FÚTBOL", img: "timpayne.jpeg" },
        'bradpitt': { titulo: "Una francesa engañada por una estafa de un falso Brad Pitt se enfrenta al ciberacoso", tag: "INSÓLITO", img: "bradpitt.jpeg" }
    };

    // Filtramos para sacar la noticia actual de las opciones a recomendar
    const opcionesFiltradas = TODAS_LAS_NOTICIAS.filter(id => id !== NOTICIA_ACTUAL);

    // Mezclamos el array para elegir 3 aleatorias
    const seleccionadas = opcionesFiltradas.sort(() => 0.5 - Math.random()).slice(0, 3);

    // Reemplazamos los contenidos dentro de la estructura exacta de tu HTML/CSS
    tarjetasContenedor.forEach((tarjeta, index) => {
        const idNoticia = seleccionadas[index];
        const data = infoTarjetas[idNoticia];

        if (data) {
            // Actualizar el enlace para que vaya al HTML correspondiente
            tarjeta.href = `${idNoticia}.html`;

            // Buscar y reemplazar el tag superior (.rec-meta)
            const recMeta = tarjeta.querySelector('.rec-meta');
            if (recMeta) recMeta.textContent = data.tag;

            // Buscar y reemplazar la imagen (.rec-img) apuntando a tu carpeta de imágenes
            const recImg = tarjeta.querySelector('.rec-img');
            if (recImg) {
                recImg.src = `../img/${data.img}`;
                recImg.alt = data.titulo;
            }

            // Buscar y reemplazar el título (.rec-title)
            const recTitle = tarjeta.querySelector('.rec-title');
            if (recTitle) recTitle.textContent = data.titulo;
        }
    });
}



// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
    inyectarEstilosEspeciales();
    inicializarContador();
    inicializarEventosScroll();
    actualizarRecomendaciones(); // <--- AGREGÁ ESTA LÍNEA ACÁ
    requestAnimationFrame(actualizarFisicasPopups);
});