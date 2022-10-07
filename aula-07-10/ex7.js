// Como apagar elementos

const itens = document.querySelectorAll('li');

itens[1].remove();
itens[2].remove();

// Outra forma de remover
const item = document.querySelector('ul');

// item.id = 'Jhow';

console.log(item);

item.firstElementChild.firstElementChild.remove();