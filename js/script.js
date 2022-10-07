var botao = document.getElementsByClassName("botao")[0];
var lista = document.getElementsByClassName("lista")[0];

botao.addEventListener('surgir', menu_responsivo);

function menu_responsivo(){
    lista.classList.toggle('surgir');
}