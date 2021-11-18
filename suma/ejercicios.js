/*SELECCIÓN DE ELEMENTOS*/

const n1 = document.getElementById("numero1");
const n2 = document.getElementById("numero2");
const boton = document.getElementById("boton_sumar");
var sumando=0

/*ESCUCHAR AL EVENTO: CLICK*/

boton.addEventListener("click", sumar);

function sumar(){

    //INSTRUCCIONES DE SUMA
    console.log(num1.value);
    sumando = parseInt(n1.value)+parseInt(n2.value)
    document.getElementById("resultado").innerHTML = sumando;
}
