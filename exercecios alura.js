let altura
let peso
function calculoIMC(altura,peso) {
    let IMC = peso/(altura * altura)
    return (`Seu Imc e ${IMC}`)
}
console.log(calculoIMC(170,800))