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



window.mudarDePagina = mudarDePagina;
