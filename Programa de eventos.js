//Data do Evento
var diaDoEvento = 10
var mesDoEvento = 03
var anoDoEvento = 2022

//Data Atual
let anoAtual = 2022
let diaAtual = 05
let mesAtual = 03

//Validação da data
if(anoDoEvento >= anoAtual){
    if(mesDoEvento >= mesAtual){
        if(diaDoEvento >= diaAtual){
            console.log("Data cadastrada com sucesso!! :)")
        }else{
            console.log("Data inválida")
        }
    }else {
        console.log("Data inválida")
    }
}else{
    console.log("Data inválida")
}

//Validação da idade
let idade = 18

if (idade < 18){
    console.log("Cadastro não permitido pela idade")
}else{
    console.log("Cadastro realizado com sucesso!!")
}

//Validação do número de participantes
var listaDeParticipantes_e_Palestrantes = ["João", "Cleber", "Roger","Thiago"]

if(listaDeParticipantes_e_Palestrantes.length < 100){
    console.log("Evento com espaço suficiente")
}else{
    console.log("Evento sem vagas")
}
