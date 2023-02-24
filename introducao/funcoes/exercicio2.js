function calculoImc(peso, altura) {
    if(typeof peso !== "number" || typeof altura !== "number"){
        throw Error("valor inválido..")
    }
    let imc = peso / (altura * altura)
    return imc.toFixed(1);
}

let clf = calculoImc(57.3, 1.84)
console.log(clf)


function classificacaoImc(clf){
    if (clf <= 16.9){
        console.log("Muito abaixo do peso");
    }else if (clf <= 18.4){
        console.log("Abaixo do peso");
    }else if (clf <= 24.9){
        console.log("Peso normal");
    }else if (clf <= 29.9){
        console.log("Acima do peso");
    }else if (clf <= 34.9){
        console.log("Obesidade Grau I");
    }else if (clf <= 40){
        console.log("Obesidade Grau II");
    }else{
        console.log("Obesidade Grau III");
    }
    
}

classificacaoImc(clf);

