let servico = prompt("Qual serviço a ser realizado? \n0 - Troca de Oleo \n1 - Alinhamento \n2 - Balanceamento");
let prazo = prompt("Qual prazo para realizar o serviço ? \n1 - Um dia \n2 - Dois dias \n3 - Tres Dias");
let tabela = [  ['R$ 200,00', 'R$ 150,00', 'R$ 100,00'],
                ['R$ 350,00', 'R$ 200,00', 'R$ 150,00'],
                ['--', '--', 'R$ 150,00']]
                
    function validaEntrada(dadoUsuario){
        return dadoUsuario >= 0 && dadoUsuario <= 2 ? true : false;
    }

    if(validaEntrada(servico) && validaEntrada(prazo)){
        alert('o serviço ficara em: ' + tabela[servico][prazo])
    } else {
        alert('ERROR: Confira os valores inseridos')
    }

