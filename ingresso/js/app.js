function comprar() {
let tipo_ingresso = document.getElementById("tipo-ingresso").value;
let qtd = document.getElementById("qtd").value;
let qtd_pista = document.getElementById("qtd-pista").innerHTML;
let qtd_superior = document.getElementById("qtd-superior").innerHTML;
let qtd_inferior = document.getElementById("qtd-inferior").innerHTML;

if (tipo_ingresso == "pista") {
    if (qtd > qtd_pista) {
    alert("Quantidade de ingressos indisponível. Por favor, escolha uma quantidade menor ou igual a " + qtd_pista);
        return;}

        let qtd_pista_final = parseInt(qtd_pista) - parseInt(qtd);
        document.getElementById("qtd-pista").innerHTML = qtd_pista_final;
    
} else if (tipo_ingresso == "superior") {
    if (qtd > qtd_superior) {
    alert("Quantidade de ingressos indisponível. Por favor, escolha uma quantidade menor ou igual a " + qtd_superior);
    return;
    }
    let qtd_superior_final = parseInt(qtd_superior) - parseInt(qtd);
    document.getElementById("qtd-superior").innerHTML = qtd_superior_final;

}else if (tipo_ingresso == "inferior") {
    if (qtd > qtd_inferior) {
    alert("Quantidade de ingressos indisponível. Por favor, escolha uma quantidade menor ou igual a " + qtd_inferior);
        return;
    }
let qtd_inferior_final = parseInt(qtd_inferior) - parseInt(qtd);
document.getElementById("qtd-inferior").innerHTML = qtd_inferior_final;
}
    
}
