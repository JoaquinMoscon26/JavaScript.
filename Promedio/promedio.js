const nota1=document.getElementById("num1");
const nota2=document.getElementById("num2");
const nota3=document.getElementById("num3");
const boton=document.getElementById("boton_promedio");
const resultado=document.getElementById
const promedio=document.getElementById("promedio");
const apro_desapro=document.getElementById("apro-desapro")
var promediar=0

//se escucha al evento click
boton.addEventListener("click", promediando)

function promediando() {

    promediar = (parseInt(nota1.value) + parseInt(nota2.value) + parseInt(nota3.value)) / 3
    document.getElementById("promedio").innerHTML = promediar;

    if (promediar >= 7) {
        apro_desapro.innerHTML = "El/la estudiante aprobó"
        promedio.classList.add("verde");

        boton.removeEventListener("click", promediando)

    } else {
        if (promediar < 7) {
            apro_desapro.innerHTML = "El/la estudiante desaprobó"
            promedio.classList.add("rojo")

            boton.removeEventListener("click", promediando)
        }
    }
}


