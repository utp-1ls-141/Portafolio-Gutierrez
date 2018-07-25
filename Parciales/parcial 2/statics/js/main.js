function noEsPrimo(content){
    var flag=false;
    if((content%2==0 && content!=2)|| (content%3==0 && content!=3)|| (content%5==0 && content!=5)|| (content%7==0 && content!=7)|| content==1){
        flag = true;
    }
    else{
        flag = false;
    }
    return flag;    
}

function crear_Mat(){
    var num=num1.value;
    var res="<center><table cellpadding='10' border='2px'>";
    var content=0;

    for (var i=0; i<num; i++){
        res=res+"<tr>";
        for (var j=0; j<num; j++){
            if (i==j){
                while (content%23!=0 || content==0){
                    content=Math.floor(Math.random()*100)+ 1;
                }
            }
            else if((num-1-i) == j){
                content=Math.floor(Math.random()*100)+ 1;
                while (noEsPrimo(content)){
                    content=Math.floor(Math.random()*100)+ 1;
                }
            }
            else{
                content=Math.floor(Math.random()*10)+ 1;
            }
            if (num%2!=0){
                if (num/2 - 0.5 == i && num/2 - 0.5 == j){
                    content=23;
                }
            }
            res=res+"<td style='background-color:#eeff00;'>"+content+"</td>";
        }
        res=res+"</tr>";
    }
    res=res+"</table></center>";

    $("#mod2").modal('show');
    $("#matriz").html(res);
}