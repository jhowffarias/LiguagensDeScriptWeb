const card = document.querySelector(".card");
const titulo = document.querySelector("h5");

card.addEventListener("mouseMove", executar);

function executar(evento) {
  titulo.textContent = `Eixo X: ${evento.offsetX}
         Eixo Y: ${evento.offsetY}`;
  document.body.style.backgroundColor = `rgb(${evento.offsetX},
        ${evento.offsetY}, 40)`;
}
