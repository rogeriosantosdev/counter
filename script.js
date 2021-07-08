//Condicionar o codigo a um evento, ele só vai ser executado quando o navegador terminar o seu carregamento
window.addEventListener("load", () => {
    const botao = document.getElementById("botao");

    botao.addEventListener("click", () =>{

    



//Tempo em segundos que queremos.
let sec = 10;
//Através da API vamos manipular os elementos.
const countDiv = document.getElementById("timer") //Pega uma tag que temos no html

const secpass = () => {
    let min = Math.floor(sec/60); //Math é uma função do JS para se obter o numerador inteiro da função.
    let segundosRestantes = sec % 60;

    if(segundosRestantes < 10){
        segundosRestantes = "0" + segundosRestantes;
    }

    if(min < 10){
        min = "0" + min;
    }

    //Vai gerar o formato de 02:59 por pegar um numero inteiro e transformou em minutos e segundos e estamos gerando esse contador.
    countDiv.innerHTML = min + ":" + segundosRestantes
    //O que queremos é por exemplo: 03:07
    

    //Condição final que se chegar em 0 acabou.
    if(sec > 0){
        sec = sec -1;
    } else {
        countDiv.innerHTML = "Acabou"
    }

} //Vai verificar o valor do nosso sec


//Precisamos criar um mecanismo para linkar isso com o html

const countDown = setInterval(() => secpass(), 1000) //Determinada função ou codigo seja executado em cada tempo
    })
})