function isomorfica(){
    var res = "";
    var boo = true;

    if(document.getElementById("iso1").value == ""){ 
        res = "Palabra 1 esta vacia";
        $(".myModal").modal("show");
        $(".mbody").html(res);
    }
    else if (document.getElementById("iso2").value == ""){ 
            res = "Palabra 2 esta vacia";
            $(".myModal").modal("show");
            $(".mbody").html(res);
    }
    else{
        if (!document.getElementById('iso1').checkValidity() || !document.getElementById('iso2').checkValidity()){
            res = "Solo se permiten letras";
            $(".myModal").modal("show");
            $(".mbody").html(res);
        }
        else {
            var str1 = document.getElementById("iso1").value;
            var str2 = document.getElementById("iso2").value;
            var len1 = str1.length; 
            if (len1 != str2.length) {
                res = "Las palabras no tienen el mismo tamaño";
                $(".myModal").modal("show");
                $(".mbody").html(res);
            }
            else{
                var chMap = {};
                for (var i = 0; i < len1; i++) {
                    if (!chMap[str1[i]]) {
                        chMap[str1[i]] = str2[i];                                        
                    } 
                    else if (chMap[str1[i]] !== str2[i]) {
                        boo=false;
                        res = "Las palabras no son isomorficas ";
                        $(".myModal").modal("show");
                        $(".mbody").html(res);
                    }
                }
                if (boo){
                    res = "Las palabras son isomorficas";
                    $(".myModal").modal("show");
                    $(".mbody").html(res);
                } 
            }
        }
            
    }
}