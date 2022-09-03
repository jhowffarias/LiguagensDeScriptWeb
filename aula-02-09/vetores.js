let colegas = [
    'Jhow',
    'Hebert'
];

console.log(colegas.length);

for (let i = 0; i < colegas.length; i++){
    console.log(`amigo: ${colegas[i]}`);
}

colegas.forEach(function (valor, indice){
    console.log(`${indice}:${valor}`);
})

colegas.map(function(valor, indice){
    console.log(`${indice}: ${valor}`);
})