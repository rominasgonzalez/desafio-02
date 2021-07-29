
let numero = prompt ("Ingresar su numero de seguridad");

if (numero > 0 && numero <= 100){
        alert("clave insegura");
}else if(numero >= 111 && numero <= 400){
        alert("seguridad medio");
}else{
        alert("Seguridad alto");
}
