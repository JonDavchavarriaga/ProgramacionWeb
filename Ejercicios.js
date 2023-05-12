/* Solucion de ejercicios de javascript 
    Estudiante: Jonatan David Chavarriaga
    Clase: Programacion web 9-12
*/

// Ejercicio 1
function edadestudiante(){
    let Inputnom=document.getElementById("inp1");
    let nom= Inputnom.value;
    let inputed=document.getElementById("inp2");
    let ed=parseInt(inputed.value)
    alert(`Hola ${nom} tienes ${ed} y el año que viene tendras ${ed+1}`);
}


//Ejercicio 2
function AreaTriangulo()
{
    const b=Number(prompt('Digite la base'))
    const h=Number(prompt('Digite la altura'))
   let r= parseInt(b*(h/2))
   alert(`El Area del triangulo es  ${r}`)
}
function AreaCuadrado()
{
    const b=Number(prompt('Digite la base'))
    const h=Number(prompt('Digite la altura'))
    let r= parseInt(b*h)
    alert(`El Area del cuadrado es  ${r}`)
}
function AreaCirculo()
{
    const ra= Number(prompt('Digite el radio'))
    const pi=3.141591
    let r=parseFloat(pi*(ra**2))
    alert(`El Area del circulo es  ${r}`)
}


//Ejericio 3
function par(num)
{
    return (num%2)
}
function Solucion()
{
const num= Number(prompt('Digite el numero del cual desea  saber si es par o impar y contar hasta este'))
  for(i=1;i<=num;i++)
  {
     if(par(i))
     {
        alert(`${i} --par`)
     }
     else
     {
        alert(`${i} --impar`)
     }

  }
}
//ejercicio 4
function primo()
{
    const numero= Number(prompt('Digite el numero'))
    let cont=0
    for(i=1;i<=numero;i++)
    {
        if(numero%i==0)
        {
            cont++
        }
    }
    if(cont==2)
    {
        alert('El numero es primo')
    }
    else
    {
        alert('El numero no es primo')
    }
}
//Ejercicio 5
function factorial()
{
    const numeroejer5= Number(prompt('Digite el numero'))
    let fact=1
    for(i=1;i<=numeroejer5;i++)
    {
        fact=fact*i
    }
    alert(`El factorial de ${numeroejer5} es ${fact}`)
}
//Ejercicio 6
/* Escribe un programa que permita ir introduciendo una serie 
indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido 
*/
function contador50()
{
    let numeroejer6=Number(prompt('Digite un numero'))
    let cont=0
    let suma=0
    while(suma<=50)
    {
        suma=suma+numeroejer6
        cont++
        numeroejer6=Number(prompt('Digite un numero'))
    }  
    alert(`La suma es ${suma} y el contador es ${cont}`)
}


//Ejercicio 7

function ejerarray(){
Anumeros=[1,2,3,4,5]
Apares=[]
Aimpares=[]
for(i=0;i<Anumeros.length;i++)
{
    ramdom=Math.floor(Math.random()*10)
    multi=Anumeros[i]*ramdom
    if(multi%2==0)
    {
       
        alert(`${Anumeros[i]}*${ramdom}=${multi}`)
        Apares.push(multi)
        alert(Apares)
        multi=0
    }
    else
    {
        alert(`${Anumeros[i]}*${ramdom}=${multi}`)
        Aimpares.push(multi)
        alert(Aimpares)
        multi =0
    }
}
}
//Ejercicio 8
function fundni(){
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let dni=Number(prompt('Digite su dni'))
if(dni<0 || dni.length>8)
{
    alert('El numero proporcionado no es valido')
    dni=Number(prompt('Digite su dni Nuevamente'))
}
}
//ejericio 9
//Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
function contadorvocales(){
    let palabra=prompt('Digite una palabra')
    let contvocales=0
    let contconsonantes=0
    for(i=0;i<palabra.length;i++)
    {
        if(palabra[i]=='a' || palabra[i]=='e' || palabra[i]=='i' || palabra[i]=='o' || palabra[i]=='u')
        {
            contvocales++
        }
        else
        {
            contconsonantes++
        }
    }
    alert(`La palabra ${palabra} tiene ${contvocales} vocales y ${contconsonantes} consonantes`)
}


//Ejercicio 10
//Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
function colores(){
const colores = ["azul", "amarillo", "rojo", "verde", "rosa"]
let color=prompt('Digite un color')
let contColor=0
for(i=0;i<colores.length;i++)
{
    if(color==colores[i])
    {
        contColor++
    }
}
if(contColor==0)
{
    alert('El color no se encuentra en el array')
}
else
{
    alert('El color se encuentra en el array')
}
}
