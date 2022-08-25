// crear un algoritmo

/* let contraseña = parseInt(prompt("ingrese contraseña"));

if (contraseña === 5) {
    alert("puedes ingresar");
} else {
    alert("ingresa nuevamente la contraseña");
} */

for (let i = 0; i < 50; i++){
    let nombre = prompt("ingrese su nombre");
    let mensaje = `entrada ${i} nombre: ${nombre}`;
    alert(mensaje);
}
alert("ya se terminaron las entradas");