// funação para ligar lampada

// Variáveis
const lamp = document.getElementById('lamp')
const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')

function islampbroken(){
    return lamp.src.indexOf('quebrada') > -1
}

// função para acender a lâmpada
function turn() {
    if(!islampbroken()){
        lamp.src = './img/ligada-removebg-preview.png' 
    }
    
}
ligar.addEventListener('click', turn)

// função p/ alterar fundo com acendimento
function light()
{
    if(!islampbroken()){

        const fundo = document.getElementsByTagName('body')
   document.body.style.backgroundColor  = 'white'
}    
}ligar.addEventListener('click', light)

// função para escurecer fundo e mostrar lampada apagada
function turnoff(){

    if(!islampbroken()){
        lamp.src = './img/desligada.png'
    const fundo = document.getElementsByTagName('body')
    document.body.style.backgroundColor  = 'black'
    }
}
desligar.addEventListener('click', turnoff)

// função para mostrar lâmpada quebrada
function lampbroken(){
    lamp.src = "./img/quebrada-removebg-preview.png"
    const fundo = document.getElementsByTagName('body')
    document.body.style.backgroundColor  = '#1C1C1C'
    const audio = new Audio('bulbbroken.mp3');
    audio.play();
    
}  lamp.addEventListener('dblclick', lampbroken)


   