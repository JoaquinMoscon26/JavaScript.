const boton_rojo = document.getElementById("boton_rojo");
const boton_amarillo = document.getElementById("boton_amarillo");
const boton_azul = document.getElementById("boton_azul");
const color_pagina = document.getElementById("body");






boton_rojo.addEventListener("click", cambiarColor)
boton_amarillo.addEventListener("click", cambiarColor2)
boton_azul.addEventListener("click", cambiarColor3)


function cambiarColor() {

    color_pagina.classList.add("rojo");
    color_pagina.classList.remove("amarillo");
    color_pagina.classList.remove("amarillo");


}

function cambiarColor2() {

    color_pagina.classList.add("amarillo");
    color_pagina.classList.remove("rojo");
    color_pagina.classList.remove("azul");

}


function cambiarColor3() {

    color_pagina.classList.add("azul");
    color_pagina.classList.remove("rojo");
    color_pagina.classList.remove("amarillo");


}





