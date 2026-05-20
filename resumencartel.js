const alertaresumen = document.getElementById("cuadroalertaresumen");
const noticia = document.getElementById("noticia"); // Podés mantener la constante si la usás para otra cosa, sino no molesta

// Variable de control para que el contador no se dispare mil veces al scrollear
let contadorIniciado = false; 

// Cambiado: Ahora escuchamos el scroll de la ventana global (window)
window.addEventListener('scroll', () => {
    // Cambiado: Usamos window.scrollY para medir el scroll del body
    if (window.scrollY > 100 && !contadorIniciado) {
        contadorIniciado = true; // Marcamos que ya arrancó para que no vuelva a entrar acá
        alertaresumen.classList.remove("oculto");
        
        // Llamamos a la función pasándole el 6 y la URL de destino
        iniciarcontador(6, 'noticiaMigueGranados.html'); 
    }
});

function iniciarcontador(numeroinicial, urlDestino){
    const pcontador = document.getElementById("contadortxt");
    let numeroactual = numeroinicial;

    // Inyectamos el texto inicial en el párrafo que estaba vacío
    pcontador.textContent = numeroactual;

    const intervalo = setInterval(() => {
        numeroactual--;
        pcontador.textContent = numeroactual;

        // Modificado para que frene exactamente en 0
        if (numeroactual === 0) {
            clearInterval(intervalo); // Frenamos el segundero

            // Esperamos 1 segundo extra (1000ms) antes de redirigir
            setTimeout(() => {
                window.location.href = urlDestino;
            }, 1000);
        }
    }, 1000);
}