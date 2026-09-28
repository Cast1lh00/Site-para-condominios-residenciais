const paginas = document.querySelectorAll('.pagina')

function mudarDePagina(atual){
    paginas.forEach(p => {
        p.classList.remove('ativa')
    });


    let nomeTexto = atual.getAttribute('data-pagina')
    let paginaAtual = document.getElementById(nomeTexto)


    if(paginaAtual){
        paginaAtual.classList.add('ativa');
        console.log(paginaAtual)
    } else {
        console.error("id nao existe")
    }
}

const botao = document.getElementById('botao')

if (localStorage.getItem('tema') === 'dark') {
    document.documentElement.classList.add('dark');
}
if(botao){
botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('tema', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    
});
}

/*function mudarTema(){
    console.log('tema alterado')
if (localStorage.getItem('tema') === 'dark') {
    document.documentElement.classList.add('dark');
}
    localStorage.setItem('tema', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
};*/

window.mudarDePagina = mudarDePagina;
