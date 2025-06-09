// FUNCIÓN PARA MOSTRAR UN CUADRO DE DIALOGO EMERGENTE 
function MostrarMensaje(){
    alert("Hola mundo:");
}
function ImprimirVariables(){
    let nombre = "Nico";
    let edad = 20;
    console.log("Nombre: ",nombre);
    console.log("Edad: ",edad);
    console.error("Error: shunsho");
    console.warn("Advertencia: XXXX");
}
function Arreglos(){
    let frutas = ['manzana','pera','mango'];
    for (let f of frutas){
        console.log(f);
    }
}
