// function buscarJugador(){
//     alert("Has presionado el botón, tío.");
// }

App = {
    init: function(){
        App.bindEvents();
    },
    elements: {
        buscarJugadorBtn: $(".buscar-jugador-btn-js"),
        jugdorTxt: $(".jugador-txt-js")
    },
    bindEvents: function(){
        // App.elements.buscarJugadorBtn.on("click", buscarJugador);
        App.elements.buscarJugadorBtn.on("click", function(){
            alert("El jugador es: "+App.elements.jugdorTxt.val());
        });
    }
}