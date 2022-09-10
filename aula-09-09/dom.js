alert(`Sua resolução é:  ${window.innerHeight} x ${window.innerWidth}`)

let meuTitulo = document.getElementById('Titulo');

meuTitulo.innerText = "Mudou!";

meuTitulo.style.background = 'red';
console.log(meuTitulo)

let msg = prompt('Mensagem');
