// Fecha final fija (ejemplo: 31 de agosto de 2025 a las 18:00)
const endDate = new Date("2025-12-01T10:00:00").getTime();

const reloj = document.querySelector(".reloj");
const botonCofre = document.getElementById("abrirCofre");

function actualizarTemporizador() {
  const ahora = new Date().getTime();
  const distancia = endDate - ahora;

  if (distancia <= 0) {
    reloj.style.display = "none";
    botonCofre.style.display = "block";

    if (!botonCofre.onclick) {
      botonCofre.onclick = () => {
        window.location.href = "cartas/cartas.html";
      };
    }
    return;
  }

  // Calcular tiempo restante
  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  // Mostrar en el HTML
  document.getElementById("dias").textContent = dias.toString().padStart(2, "0");
  document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
  document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
  document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
}

// Actualizar cada segundo
setInterval(actualizarTemporizador, 1000);
actualizarTemporizador();
