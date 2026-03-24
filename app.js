let listaDeNumeroSorteados =[];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
   

};

function mensagemInicial() {
    exibirTextoNaTela('h1', 'jogo do numero Secreto');
    exibirTextoNaTela('p','Escolhe um numero entre 1 e 10' );
}
    mensagemInicial();  

function verificarChute(){
    let chute = document.querySelector('input').value;
        if (chute == numeroSecreto){
            exibirTextoNaTela('h1', 'Acertou');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas =`Voce descobriu o Numero secreto com ${tentativas} ${palavraTentativa}`;
            exibirTextoNaTela('p',mensagemTentativas );
            document.getElementById('reiniciar').removeAttribute('disabled');

        }else{
            if (chute > numeroSecreto){
                exibirTextoNaTela('p', 'O numero secreto e menor');
            }else{
                exibirTextoNaTela('p', 'O numero secreto e maior');
        } tentativas++;
        limparCampo()
    
};
}

    function gerarNumeroAleatorio() {
        let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
        let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;
            if(quantidadeDeElementosNaLista == numeroLimite ){
                listaDeNumeroSorteados = [];
            }
            if(listaDeNumeroSorteados.includes(numeroEscolhido)){
                return gerarNumeroAleatorio();
            } else {
                listaDeNumeroSorteados.push(numeroEscolhido)
                console.log(listaDeNumeroSorteados)
                return numeroEscolhido;
            }
            
        
}
function limparCampo() {
    chute = document.querySelector(`input`);
    chute.value = ``;   
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial()
    document.getElementById(`reiniciar`).setAttribute('disabled', true)
}