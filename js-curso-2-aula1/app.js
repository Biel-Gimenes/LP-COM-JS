let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag)
    campo.innerHTML = texto;

}
exibirTextoNaTela('h1', 'jogo do numero Secreto')
exibirTextoNaTela('p','Escolhe um numero entre 1 e 10' )


function verificarChute(){
    let chute = document.querySelector('input').value;
        if (chute == numeroSecreto){
            console.log('Voce errou')
        }else{
            console.log('Voce acertou')
        }
    console.log(chute == numeroSecreto);
    
};


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
        
    
}