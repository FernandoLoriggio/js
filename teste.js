const idade = 17
const sexo = "F"
const acompanhadaDeMaior = true


if(idade >= 18){
    var podeEntrar= true;
    console.log("pode entrar no role");
}
else{
    if(acompanhadaDeMaior){
        var podeEntrar= true;
        console.log("pode entrar no role");
    }
else{
        var podeEntrar= false;
        console.log("não pode entrar no role");
    }
};

 if(podeEntrar){
     if(sexo == "F"){
        console.log("VIP")
     }else{
         console.log("PAGA")
     }
     };