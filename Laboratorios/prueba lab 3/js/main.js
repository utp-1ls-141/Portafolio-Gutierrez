"use strict";
(function(){
    // Primera prueba
    alert ("Hola mundo, vengo por las gemas");

    // Segunda prueba
    console.log("Thanos, He venido a negociar");
    console.log("No hay necesidad de negociar");
    console.log("Hola, soy Doctor Strange");
    console.log("Si usamos nombres inventados soy spider-man");
    document.getElementById("reemplazame2").innerHTML = '<iframe width="720" height="405" src="https://www.youtube.com/embed/6ZfuNTqbHE8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';

    // Tercera prueba
    var nombre="Erick", apellido="Agrazal";
    console.log("El profesor es "+nombre+" "+apellido+".");
    var estudiante="Isaac";
    console.log("Estudiante que va a pasar "+estudiante);

    var objeto = {};
    var cad = "add", cod = "egg";
    for (var i=0; i<3; i++){
        objeto[cad[i]]=cod[i];
    }
    console.log(objeto);

    function sumar(a,b,callback){
        return callback(a+b);
    }
    console.log(sumar(10,10, function(a){
        return a/2;
    }));
})();