const botao = document.getElementById("alternar");

if(localStorage.getItem('tema') === 'dark'){
    document.documentElement.classList.add('dark');
}

botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('tema', document.documentElement.classList.contains('dark') ? 'dark' : 'light')
});
