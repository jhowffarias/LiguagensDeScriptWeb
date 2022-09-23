let classe;
let Qntclasses;

classe = document.getElementsByClassName('collection-item');
// classe = document.getElementsByTagName('li');
// classe = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(classe[3]);

let vetor = Array.from(classe);

console.log(vetor);

vetor.forEach(function(val){
    val.style.color = 'red';

    // val.innerText = 'Outra tarefa';

    console.log(val.innerText);
});

classe = document.querySelectorAll('li');

console.log(classe[2]);

classe.forEach(function(val){
    console.log(val.innerText);
});

// Somente impares (para parseFloat, even)
classe = document.querySelectorAll('li:nth-child(odd)');

classe.forEach(function(val){
    val.style.background = 'blue';
})

classe = document.querySelector('ul.collection');

console.log(classe.children[3].children[0]);