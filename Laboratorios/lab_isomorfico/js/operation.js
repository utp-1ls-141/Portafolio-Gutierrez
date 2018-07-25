// Comprobar caracteres únicos
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

// Evaluar caracter a caracter
function areIs(str1, str2){
    var len1 = str1.length;
    var character_map = {};
    
    for (var i = 0; i < len1; i++) {
        if (!character_map[str1[i]]) {   	
            character_map[str1[i]] = str2[i];
     
        } else if (character_map[str1[i]] !== str2[i]) {
            return false;
        }
    }
    return true;
}

// Comprobar si es isomórfica
function is_Isomorfic(){
    var result = "--";
    try{
        var str1 = cadena1.value.toLowerCase();
        var str2 = cadena2.value.toLowerCase();
        var ls1 = str1.length;
        var ls2 = str2.length;

        if(str1==="" || str2===""){
            result = "Alguna de las cadenas está vacía.";
        }
        else{
            if (!document.getElementById('cadena1').checkValidity() || !document.getElementById('cadena2').checkValidity()){
                result = "Ha introducido números y/o caracteres especiales. Utilice letras solamente.";
            }
            else{
                if (ls1 != ls2){
                    result = "Estas cadenas no son isomórficas: Longitudes diferentes.";
                }
                else{
                    if (str1 == str2){
                        result = "Estas cadenas son isomórficas: Cadenas iguales."; 
                    }
                    else{
                        var flag = areIs(str1,str2); //Bandera lógica
                        if (flag){
                            result = "Estas cadenas son isomórficas.";
                        }
                        else {
                            result= "Estas cadenas no son isomórficas.";
                        }
                    }
                }
            }
        }
    }
    catch(err){
        result = "Ha ocurrido un error inesperado. "+err.message;
    }
    $("#mymodal").modal("show");
    $("#mbody").html(result);
}