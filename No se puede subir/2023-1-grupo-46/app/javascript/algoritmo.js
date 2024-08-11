document.addEventListener("DOMContentLoaded", function(event) {
    recomendador(event, <%= @user.compras.to_json.html_safe %>, <%= @libros.to_json.html_safe %>);
});

function redireccionar(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    const select = document.getElementById("exampleFormControlSelect1");
    const opcionSeleccionada = select.value;
    window.location.href = "/categoria/" + opcionSeleccionada;
}

function recomendador(event, compras, libros) {
    event.preventDefault();
    const librosComprados = [];
    const librosRecomendados = [];

    const outputDiv = document.getElementById("probando-que-onda");
    outputDiv.innerText = "¡Hola, mundo!";
}
