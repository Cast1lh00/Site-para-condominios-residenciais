
//girar botao e fazer menu apareer
const menu = document.querySelector('.menu');
const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
const item4 = document.querySelector('.item4')


menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    item1.classList.toggle('ativo')
    item2.classList.toggle('ativo')
    item3.classList.toggle('ativo')
    item4.classList.toggle('ativo')
}); 
