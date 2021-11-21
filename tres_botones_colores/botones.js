const boton_rojo=document.getElementById("boton_rojo");
const boton_amarillo=document.getElementById("boton_amarillo");
const boton_azul=document.getElementById("boton_azul");
const color_pagina=document.getElementById("body");

if(boton_rojo.addEventListener("click")){

    color_pagina.classList.add("rojo");
}else{
    if(boton_amarillo=addEventListener("click")){

        color_pagina.classList.remove("rojo");
        
    }else{
        if(boton_azul=addEventListener("click")){

            color_pagina.classList.remove("amarillo");
            color_pagina.classList.add("azul");
        }
    }

}

setTimeout (mifuncion, 4000);

function cambiarColor(){
    color_pagina.innerHTML=color_pagina.classList.add("amarillo");
}