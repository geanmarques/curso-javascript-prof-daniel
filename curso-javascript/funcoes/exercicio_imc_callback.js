


function calcularIMC(peso, altura, callback) {
    if(peso === undefined || altura === undefined){
        throw Error("valor inválido..")
    }
    
    let imc = peso / (altura * altura)

    if(typeof callback === "function"){
        return callback(imc)
    }
    return imc
}


function classificaIMC(imc){
    if (imc <= 16.9){
        return"Muito abaixo do peso";
    }else if (imc <= 18.4){
        return "Abaixo do peso";
    }else if (imc <= 24.9){
        return "Peso normal";
    }else if (imc <= 29.9){
        return "Acima do peso";
    }else if (imc <= 34.9){
        return "Obesidade Grau I";
    }else if (imc <= 40){
        return "Obesidade Grau II";
    }else{
        return "Obesidade Grau III";
    }
    
}

let imc = calcularIMC(20, 1.65)
let imc2 = calcularIMC(20 , 1.65, classificaIMC)
console.log(imc);
console.log(imc2);