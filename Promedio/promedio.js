const nota1=document.getElementById("num1");
const nota2=document.getElementById("num2");
const nota3=document.getElementById("num3");
const boton=document.getElementById("boton_promedio");
const resultado=document.getElementById
const promedio=document.getElementById("promedio");
var promediar

//se escucha al evento click
boton.addEventListener("click", promediando)

function promediando(){

    promediar=(parseInt(nota1)+parseInt(nota2)+parseInt(nota3))/3
    document.getElementById("promedio").innerHTML=promediar;
}

if(promediar>=7){

    promedio.classList.add("verde");
}else{
    promedio.classList.add("rojo")
}