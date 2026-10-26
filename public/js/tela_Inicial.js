const paginas = document.querySelectorAll('.pagina')
const marcador = document.getElementById('marcador')
const casa = document.getElementById('home')
const inicio = document.getElementById('casa')
let nomeTexto = casa.getAttribute('data-pagina')
let paginaAtual = document.getElementById(nomeTexto)


if (casa.classList.contains('ativa')){
    console.log(inicio+'esse he o inicio')
    const lugar = inicio.offsetTop;
    const altura = inicio.offsetHeight;
    
    marcador.style.transform = `translateY(${lugar}px)`;
    marcador.style.height = `${altura}px`;
}


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

    if(marcador && atual){
        const posicaoTopo = atual.offsetTop;
        const largura = atual.offsetHeight;

        marcador.style.transform = `translateY(${posicaoTopo}px`;
        marcador.style.height = `${largura}px`; 
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
