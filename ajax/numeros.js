document.querySelector('button').addEventListener('click', buscaDados);

function buscaDados(event){
    event.preventDefault();
    let numero = document.getElementById('busca').value;

    //fazemos a chamada
    fetch(`http://numbersapi.com/#${numero}`).then(function(ret){
    //pegamos apenas o conteudo do retorno
        return ret.text();
        //entao
    }).then(function(cont){
        //trabalhamos com o conteudo retornado
        // let dados = JSON.parse(cont);
        console.log(cont)


        // let saida = `Curiosidade sobre o numero ${dados.numero}: `;

        // document.querySelector('#dadoRecuperado').innerHTML = saida;
    });

}
