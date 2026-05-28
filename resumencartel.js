document.addEventListener('DOMContentLoaded', (event) =>{
    iniciarcontadornoticia(15)
})

const alertaresumen = document.getElementById("cuadroalertaresumen");


// Variable de control para que el contador no se dispare mil veces al scrollear
let contadorIniciado = false; 

// 🔧 NUEVO: permite cerrar el popup de resumen
let resumenActivo = true;


// Capturamos todos tus popups (popup1, popup2, etc.) y los pasamos a una lista limpia
const listaPopups = Array.from(document.querySelectorAll('[class*="popup"].oculto'));

function verificarInterrupcion() {
    const alturaTotalVentana = window.innerHeight;
    const scrollActual = window.scrollY;
    const alturaTotalDocumento = document.documentElement.scrollHeight;
    
    const porcentajeScroll = (scrollActual / (alturaTotalDocumento - alturaTotalVentana)) * 100;

    if (listaPopups.length > 0) {
        
        if (porcentajeScroll > 50 && listaPopups.includes(document.querySelector('.popup1'))) {
            document.querySelector('.popup1')?.classList.remove('oculto');
        }
        
        if (porcentajeScroll > 95 && listaPopups.includes(document.querySelector('.popup2'))) {
            document.querySelector('.popup2')?.classList.remove('oculto');
        }

        if (porcentajeScroll > 100 && listaPopups.includes(document.querySelector('.popup3'))) {
            document.querySelector('.popup3')?.classList.remove('oculto');
        }
        
        for (let i = listaPopups.length - 1; i >= 0; i--) {
            if (!listaPopups[i].classList.contains('oculto')) {
                listaPopups.splice(i, 1);
            }
        }
    }

    if (listaPopups.length === 0) {
        window.removeEventListener('scroll', verificarInterrupcion);
    }
}

window.addEventListener('scroll', verificarInterrupcion);


// =========================
// POPUP RESUMEN IA (FIX CIERRE)
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const btnCerrar = document.querySelector(".botonfalso-resumen");

    if (btnCerrar && alertaresumen) {
        btnCerrar.addEventListener("click", () => {
            alertaresumen.classList.add("oculto");

            // 🔧 esto corta el popup visual, pero NO rompe el resto del sistema
            resumenActivo = false;
        });
    }

});


// =========================
// CONTADOR NOTICIA
// =========================

function iniciarcontador(numeroinicial) {
    alertaresumen.classList.remove("oculto")

    const pcontador = document.getElementById("contadortxt");
    let numeroactual = numeroinicial;

    pcontador.textContent = numeroactual;

    const intervalo = setInterval(() => {

        // 🔧 si se cerró el popup, se detiene el contador
        if (!resumenActivo) {
            clearInterval(intervalo);
            return;
        }

        numeroactual--;
        pcontador.textContent = numeroactual;

        if (numeroactual === 0) {
            clearInterval(intervalo); 

            const paginasRandom = [
                'noticiaMigueGranados.html',
                'noticiaAlbumMundial.html',
            ];

            const indiceAleatorio = Math.floor(Math.random() * paginasRandom.length);
            const paginaDestino = paginasRandom[indiceAleatorio];

            setTimeout(() => {
                window.location.href = paginaDestino;
            }, 1000);
        }

    }, 1000);
}


// =========================
// CONTADOR NOTICIA PRINCIPAL
// =========================

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