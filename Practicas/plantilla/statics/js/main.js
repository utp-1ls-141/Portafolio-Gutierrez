(function(){
    alert("Función anónima que se dispara automáticamente");
})();

function concat_cadenas(){
    var st1= pal1.value;
    var st2= pal2.value;

    var result = st1 + " " +st2;

    $("#mymodal").modal("show");
    $("#mbody").html(result);
}