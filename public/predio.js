const botao = document.getElementById("alternar");
const predio = document.getElementById('predio');
const predios = document.getElementById('predio');

if(localStorage.getItem('tema') === 'dark'){
    document.documentElement.classList.add('dark');
}

if (document.documentElement.classList.contains('dark')){
predio.src = "assets/predios-noite.svg"
} else {
    predio.src = "assets/predios.svg"
}



if(sessionStorage.getItem('animou-predio')){
    predios.classList.add('sem-animacao');
    predio.classList.remove('anima-entrada')
} else {
    predios.classList.add('anima-entrada');
    sessionStorage.setItem('animou-predio', 'true') 
}

botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('tema', document.documentElement.classList.contains('dark') ? 'dark' : 'light')
    if (document.documentElement.classList.contains('dark')){
    predio.src = "assets/predios-noite.svg"
    } else {
        predio.src = "assets/predios.svg"
    }
});