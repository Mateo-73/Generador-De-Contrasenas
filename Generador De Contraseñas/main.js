let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena= document.getElementById("contrasena");
const cadenaCaracteres="ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!@#$%^&*()";
let contador=0;
let contadormin=0;
let contadorS=0;
let contadorN=0;
function Boton1()
{
    digitosminimos();
    Generar();
    Comparar();
    ContrasenaSegura();

    
}
function Generar()
{
    let numerodigitado=parseInt(cantidad.value);
    let password="";
    let caracteraleatorio="";

    for (i=0;i<numerodigitado;i++)
        {
            caracteraleatorio= cadenaCaracteres[Math.floor(Math.random()*cadenaCaracteres.length)];
            password+=caracteraleatorio;
            contrasena.value=password;

        }
}
function digitosminimos()
{
    let numerodigitado=parseInt(cantidad.value);
    if (numerodigitado < 7 )
    {
        alert("La cantidad de caracteres tiene que ser mayor que 7");
    }
}
function Borrar()
{
    contrasena.value="";
    cantidad.value="";
}
function Comparar()
{   
    const cadenaMayuscula= /[A-Z]/.test(contrasena.value);
    if (cadenaMayuscula==true)
    {
        contador++;
    }
    else
    {
        contador=0;
    }
    const cadenaminuscula=/[a-z]/.test(contrasena.value);
    if (cadenaminuscula==true)
    {
        contadormin++;
    }
    else
    {
        contadormin=0;
    }
    const cadenanumero=/[0-9]/.test(contrasena.value);
    if (cadenanumero==true)
    {
        contadorN++;
    }
    else
    {
        contadorN=0;
    }
    const cadenasigno=/[!@#$%^&*()]/.test(contrasena.value);
    if (cadenasigno==true)
    {
        contadorS++;
    }
    else
    {
        contadorS=0;
    }
    
    
}
function ContrasenaSegura()
{
    if (contador>0 && contadormin>0 && contadorN>0 && contadorS>0)
    {
        console.log("su contraseña es segura");
    }
    else
    {
        console.log("su contraseña no es segura necesita por lo menos un numero, una mayuscula, una minuscula y un signo")
    }
}            










