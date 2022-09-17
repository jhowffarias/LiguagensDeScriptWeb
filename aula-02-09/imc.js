let peso = prompt("Qual seu peso?");
let altura = prompt("Qual sua altura?");

function calcularImc(peso, altura){

    alert(resultado)

    let imc = peso/(altura^2);

    let retorno = '';

    if(imc > 25){
        retorno = 'acima do peso';
    }else if(imc >= 18 && imc <= 25){
        retorno = 'peso ideal';
    } else {
        retorno = 'abaixo do peso';
    }

    return retorno;
}