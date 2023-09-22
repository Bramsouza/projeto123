
function tabuada(){
    for(var count = 1; count <= 10 ; count++){
        document.write("4 x " + count + " = " + (4*count) + "<br/>");
    }
     
  }



tabuada();

function Alerta(){
    window.alert("olá sou um alerta")
}

function alterarImagem(){
    document.getElementById("alt").src = "https://i.pinimg.com/564x/df/19/bb/df19bb899d2747fc07988308f2a7f95b.jpg"
}
function voltarImagem(){
    document.getElementById("alt").src = "https://i.pinimg.com/564x/5d/88/2f/5d882faf0bb786385fab50ca2208da0f.jpg"
}


var contagem = 0;

function quiz(){
    var resposta = document.getElementById("entrada1").value;
    
    if(resposta == "Descartes" || resposta == "descartes" || resposta == "René Descartes" || resposta == "rené descartes" ){
        document.getElementById("resp1").innerHTML = "você acertou!"
        document.getElementById("resp1").style.color = "green"
        contagem = contagem+1
    }else {
        document.getElementById("resp1").innerHTML = "desculpe resposta errada"
        document.getElementById("resp1").style.color = "red"
    }

}

function quiz2(){
    var resposta = document.getElementById("entrada2").value;
    if(resposta == "h2O" || resposta == "h2o" || resposta == "H2O"){
        document.getElementById("resp2").innerHTML = "você acertou!"
        document.getElementById("resp2").style.color = "green"

        //OUTRA FORMA DE COLOCAR COR
        //document.getElementById("resp2").innerHTML = "<p style='color: purple'>você acertou!</p>"

        contagem = contagem+1
        
    }else{
        document.getElementById("resp2").innerHTML = "desculpe resposta errada"
        document.getElementById("resp2").style.color = "red"
        
    }

}

function verificar(){
    if(contagem >= 2){
        document.getElementById("mensagem").innerHTML = "Parabéns"
    }else if(contagem == 0){
        document.getElementById("mensagem").innerHTML = "você ainda não realizou nenhuma pontuação"
    }else{
        document.getElementById("mensagem").innerHTML = "Poxa vamos melhorar"
    }
}


function carregar(){

    nome = document.getElementById("nome").value;
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    var imc = (peso/(altura*altura)).toFixed(1);

    //document.getElementById("valores").innerHTML = imc;
    if(imc <=16.9){
        document.getElementById("valores").innerHTML = imc;
        document.getElementById("msg").innerHTML = nome + " você está extremamente abaixo do peso" 
    }else if(imc>=40){
        document.getElementById("valores").innerHTML = imc;
        document.getElementById("msg").innerHTML = nome + " você tem obesidade de grau III" 

    }else if(imc >= 17 && imc <= 18.4){
        document.getElementById("valores").innerHTML = imc;
        document.getElementById("msg").innerHTML = nome + " você está abaixo do peso" 

    }else if(imc>=18.5 && imc<=24.9){
        document.getElementById("valores").innerHTML = imc;
        document.getElementById("msg").innerHTML = nome + " seu peso está normal" 

    }else if(imc>=25 && imc <=29.9){
        document.getElementById("valores").innerHTML = imc;
        document.getElementById("msg").innerHTML = nome + " você está acima do peso" 

    }else if(imc>=30 && imc <=34.9){
        document.getElementById("valores").innerHTML = imc;
        document.getElementById("msg").innerHTML = nome + " você tem obesidade de grau I" 
    }  
    else if(imc>=35 && imc <=40){
        document.getElementById("valores").innerHTML = imc;
        document.getElementById("msg").innerHTML = nome + " você tem obesidade de grau II" 
    }  
    
}
