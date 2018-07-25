function Concatenar(){
    var p1 = pal1.value;
    var p2 = pal2.value;

    var res = p1 + " " + p2;

    $("#mod1").modal('show');
    $("#conca").html(res);
}

function crear_Mat(){
    var num=num1.value;
    var res="<table cellpadding='10'>";
    var content=0;

    for (var i=0; i<num; i++){
        res=res+"<tr>";
        for (var j=0; j<num; j++){
            if (i==j){
                while (content%3!=0 || content==0){
                    content=Math.floor(Math.random()*10)+ 1;
                }
            }else{
                content=Math.floor(Math.random()*10)+ 1;
            }
            res=res+"<td>"+content+"</td>";
        }
        res=res+"</tr>";
    }
    res=res+"</table>";

    $("#mod2").modal('show');
    $("#matriz").html(res);
}