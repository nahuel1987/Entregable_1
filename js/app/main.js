const nombreTrabajo = prompt("Ingresar tipo de trabajo deseado (Administrativo - Comercial - Otros)");

const Administrativo = ["Tarea de administración en empresa multinacional", "Edad mínima 23 años", "Sueldo promedio 450 usd"];
const Comercial = ["Tarea de ventas para empresa multinacional", "Edad mínima 21 años", "Sueldo promedio 850 usd"];
const Otros = ["Tarea de serviicos en empresa multinacional", "Edad mínima 25 años", "Sueldo promedio 650 usd"];
    
function buscador_trabajo() {
    if (nombreTrabajo == "") {
        alert("No ingresaste ningun trabajo");
    } else if (nombreTrabajo == "Administrativo") {
        console.log(Administrativo);
    } else if (nombreTrabajo == "Comercial") {
        console.log(Comercial);
    } else if (nombreTrabajo == "Otros") {
        console.log(Otros);
}}

buscador_trabajo()

const rootElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;

console.log(rootElement);
console.log(headElement);

// bodyElement.style.backgroundColor

const myH1 = document.createElement("h1");
myH1.textContent = "welcome to nodes!";

bodyElement.appendChild(myH1);
