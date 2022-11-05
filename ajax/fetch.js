document.querySelector('button').addEventListener('click', buscaDados);

function buscaDados(event){
    event.preventDefault();

    //fazemos a chamada
    fetch('http://127.0.0.1:5502/ajax/conteudo.txt').then(function(ret){
    //pegamos apenas o conteudo do retorno
        return ret.text();
        //entao
    }).then(function(cont){
        //trabalhamos com o conteudo retornado
        let dados = JSON.parse(cont);

        let saida = '';

        dados.forEach(function(aluno){
            saida == aluno.idade >= 18 ? `${aluno.nome} é maior de idade <br>` : `${aluno.nome} é menor de idade <br>`;
        });
        document.querySelector('#dadosRecuperado').innerHTML = saida;
    });

}
