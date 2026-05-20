document.addEventListener('DOMContentLoaded', (event) =>{
    iniciarcontadornoticia(15)
})

const alertaresumen = document.getElementById("cuadroalertaresumen");


// Variable de control para que el contador no se dispare mil veces al scrollear
let contadorIniciado = false; 

// Capturamos todos tus popups (popup1, popup2, etc.) y los pasamos a una lista limpia
const listaPopups = Array.from(document.querySelectorAll('[class*="popup"].oculto'));

function verificarInterrupcion() {
    // 1. Calculamos cuánto scroll ha hecho el usuario en total
    const alturaTotalVentana = window.innerHeight;
    const scrollActual = window.scrollY;
    const alturaTotalDocumento = document.documentElement.scrollHeight;
    
    // Calculamos el porcentaje de scroll actual (de 0 a 100)
    const porcentajeScroll = (scrollActual / (alturaTotalDocumento - alturaTotalVentana)) * 100;

    // 2. Si nos quedan popups por mostrar...
    if (listaPopups.length > 0) {
        
        // --- CONFIGURACIÓN DE DISPAROS ---
        // Si el usuario bajó más del 25% y todavía no mostramos el primer popup
        if (porcentajeScroll > 50 && listaPopups.includes(document.querySelector('.popup1'))) {
            const popup1 = document.querySelector('.popup1');
            popup1.classList.remove('oculto');
            console.log("¡Interrupción 1 disparada!");
        }
        
        // Si bajó más del 55% y todavía no mostramos el segundo popup
        if (porcentajeScroll > 95 && listaPopups.includes(document.querySelector('.popup2'))) {
            const popup2 = document.querySelector('.popup2');
            popup2.classList.remove('oculto');
            console.log("¡Interrupción 2 disparada!");
        }

        // Si bajó más del 80% y todavía no mostramos el tercer popup
        if (porcentajeScroll > 100 && listaPopups.includes(document.querySelector('.popup3'))) {
            const popup3 = document.querySelector('.popup3');
            popup3.classList.remove('oculto');
            console.log("¡Interrupción 3 disparada!");
        }
        
        // Actualizamos la lista eliminando los que ya perdieron la clase 'oculto'
        for (let i = listaPopups.length - 1; i >= 0; i--) {
            if (!listaPopups[i].classList.contains('oculto')) {
                listaPopups.splice(i, 1);
            }
        }
    }

    // Si ya se usaron todos, apagamos el scroll para no consumir recursos
    if (listaPopups.length === 0) {
        window.removeEventListener('scroll', verificarInterrupcion);
    }
}

// Escuchamos el scroll del usuario
window.addEventListener('scroll', verificarInterrupcion);


function iniciarcontador(numeroinicial) {
    alertaresumen.classList.remove("oculto")
    const pcontador = document.getElementById("contadortxt");
    let numeroactual = numeroinicial;

    pcontador.textContent = numeroactual;

    const intervalo = setInterval(() => {
        numeroactual--;
        pcontador.textContent = numeroactual;

        if (numeroactual === 0) {
            clearInterval(intervalo); 

            // 1. Armamos la lista con las páginas que tenés en tu carpeta
            const paginasRandom = [
                'noticia1.html',
                'noticia2.html',
                'noticia3.html',
                'articulo_final.html'
            ];

            // 2. Generamos un índice aleatorio basado en el largo de la lista
            // Math.random() da un número entre 0 y 0.99
            // Al multiplicarlo por el largo (ej: 4) y usar Math.floor, nos da un entero del 0 al 3
            const indiceAleatorio = Math.floor(Math.random() * paginasRandom.length);
            
            // 3. Elegimos la página elegida por el azar
            const paginaDestino = paginasRandom[indiceAleatorio];

            // Esperamos el segundo extra que querías antes de viajar
            setTimeout(() => {
                // 4. Redirige a la página elegida
                window.location.href = paginaDestino;
            }, 1000);
        }
    }, 1000);
}



function iniciarcontadornoticia(numeroinicial) {
    const contadornoticia = document.getElementById("contadornoticia");
    let numeroactualnoticia = numeroinicial;

    contadornoticia.textContent = numeroactualnoticia;

    const intervalo = setInterval(() => {
        numeroactualnoticia--;
        contadornoticia.textContent = numeroactualnoticia;

        if (numeroactualnoticia === 0) {
            clearInterval(intervalo); 
            iniciarcontador(10)
        }
    }, 1000);
}