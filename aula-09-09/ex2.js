let btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click', function(event){
    event.preventDefault();
    console.log(event)

    //Obter os valores de serviço e prazo
    let Servico = document.getElementById('servico');
    let Prazo = document.getElementById('prazo');
    let resultado = document.getElementById('resultado');

    let preco = calculaPreco(Servico.value, Prazo.value);

    resultado.innerText = `O preço é ${preco}`;

    function calculaPreco(Servico, Prazo){
        let tabela = [  ['R$ 200,00', 'R$ 150,00', 'R$ 100,00'],
                        ['R$ 350,00', 'R$ 200,00', 'R$ 150,00'],
                        ['Não Fazemos', 'Não Fazemos', 'R$ 150,00']]

        return tabela[Servico][Prazo];
    }
});

