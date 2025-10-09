
document.addEventListener("DOMContentLoaded", function () {
    let div = document.getElementById("contenedorGeneral");
    div.style.width = "200px"
    div.style.height = "200px"
    div.style.backgroundColor = "#9e9e9e"
    div.style.color = "blue"
    div.style.border = "1px solid red"


    window.addEventListener("resize", function () {

        div.innerText = "Ancho: " + window.innerWidth + "\n";
        div.innerText += "Altura: " + window.innerHeight;
    })
})
