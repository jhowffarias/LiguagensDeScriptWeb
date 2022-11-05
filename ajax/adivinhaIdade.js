document.querySelector('button').addEventListener('click', buscaDados);

function buscaDados(event){
    event.preventDefault();
    let nome = document.getElementById('busca').value;

    //fazemos a chamada
    fetch(`https://api.agify.io/?name=${nome}`).then(function(ret){
    //pegamos apenas o conteudo do retorno
        return ret.text();
        //entao
    }).then(function(cont){
        //trabalhamos com o conteudo retornado
        let dados = JSON.parse(cont);

        let saida = `${dados.name} tem ${dados.age} anos`;

        document.querySelector('#dadoRecuperado').innerHTML = saida;
    });

}
