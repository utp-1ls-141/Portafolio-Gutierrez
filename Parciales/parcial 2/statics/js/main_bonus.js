function esPrimo(content){
    var flag=true;
    if((content%2==0 && content!=2)|| (content%3==0 && content!=3)|| (content%5==0 && content!=5)|| (content%7==0 && content!=7)|| content==1){
        flag = false;
    }
    else{
        flag = true;
    }
    return flag;    
}

function verRotacion(){
    var cadena = numR.value;
    var auxiliar = cadena;
    var number=0;
    var result="";

    for (var i=0; i<cadena.length; i++){
        result=result+auxiliar+" ";
        number=Number(auxiliar);
        if (esPrimo(number)){
            result=result+"es primo.<br>";
        }
        else{
            result=result+"no es primo.<br>";
        }//1 9 7
        auxiliar=auxiliar.replace(auxiliar[0],"") + auxiliar[0];
    }


    $("#mod4").modal('show');
    $("#rota").html(result);
}