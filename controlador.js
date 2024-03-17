//funcion que captura datos de un cuadro de texto de formulario
function captura(){
    var nombreCliente=document.getElementById("nombreapellido").value;//captura el dato ingresado 
    var correoCliente=document.getElementById("correoelectronico").value;
    var telefonoCliente=document.getElementById("telefono").value;
    var mensajeCliente=document.getElementById("mensaje").value;
    //alert(nombreCliente + " " + correoCliente + " " + telefonoCliente + " " + mensajeCliente);
    console.log(nombreCliente);
}