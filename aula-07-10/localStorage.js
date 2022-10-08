// localStorage.setItem('nome', 'Jonathan');
// localStorage.setItem('sobrenome', 'Farias');

let btn = document.getElementById('botao');

btn.addEventListener('click', mostrar);

function mostrar(evento){
    evento.preventDefault();
    let valor = document.getElementById('entrada').value;
    document.getElementById('mostrar').innerText = valor;
    localStorage.setItem('dadoDoUsuario', valor);
};

    document.querySelector('#mostrar').innerText = localStorage.getItem('dadoDoUsuario');