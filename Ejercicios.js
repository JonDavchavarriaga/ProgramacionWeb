/* Solucion de ejercicios de javascript 
    Estudiante: Jonatan David Chavarriaga
    Clase: Programacion web 9-12
*/

// Ejercicio 1

function edadestudiante(nombre,edad){
   console.log(`Hola ${nombre} tienes ${edad} y el año que viene tendras ${edad++}`);
}
let nom=String(prompt('Digite el nombre'))
let ed=Number(Prompt('Digite la edad'))
function edadestudiante(nombre,edad)

//Ejercicio 2
function AreaTriangulo(b,h)
{
   return (b*(h/2))
}
function AreaCuadrado(b,h)
{
    return (b*h)
}
function AreaCirculo(r)
{
    const pi=3.141591
    return (pi*(r**2))
}
let fig=prompt('Indique que tipo de figura quiere conocer el area')
if(fig == "triangulo")
{
    const b=Number(prompt('Digite la base'))
    const h=Number(prompt('Digite la altura'))
    AreaTriangulo(b,h)
}
if(fig == "cuadrado")
{
    const b=Number(prompt('Digite la base'))
    const h=Number(prompt('Digite la altura'))
    AreaCuadrado(b,h)
}
if(fig = "circulo")
{
    const r= Number(prompt('Digite el radio'))
    
}
//Ejericio 3
let num=Number(prompt('Digite el numero'))
function par(num)
{
    return (num%2)
}
function Solucion(Number)
{
  for(i=1;i<=Number;i++)
  {
     if(par(i))
     {
        console.log(`${i} --par`)
     }
     else
     {
        console.log(`${i} --impar`)
     }

  }
}
//ejercicio 4

let numero=Number(prompt('Digite el numero'))
function primo(numero)
{
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
        console.log('El numero es primo')
    }
    else
    {
        console.log('El numero no es primo')
    }
}
//Ejercicio 5
let numeroejer5=Number(prompt('Digite el numero'))
function factorial(numeroejer5)
{
    let fact=1
    for(i=1;i<=numeroejer5;i++)
    {
        fact=fact*i
    }
    console.log(`El factorial de ${numeroejer5} es ${fact}`)
}
//Ejercicio 6
/* Escribe un programa que permita ir introduciendo una serie 
indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido */
let numeroejer6=Number(prompt('Digite un numero'))
let cont=0
let suma=0
while(suma<=50)
{
    suma=suma+numeroejer6
    cont++
    numeroejer6=Number(prompt('Digite un numero'))
}
console.log(`La suma es ${suma} y el contador es ${cont}`)
//Ejercicio 7
Anumeros=[1,2,3,4,5]
Apares=[]
Aimpares=[]
for(i=0;i<Anumeros.length;i++)
{
    ramdom=Math.floor(Math.random()*10)
    multi=Anumeros[i]*ramdom
    if(multi[i]%2==0)
    {
        Apares.push(Anumeros[i])
        console.log(`${Anumeros[i]}*${ramdom}=${multi[i]}`)
        alert(Apares)
    }
    else
    {
        Aimpares.push(Anumeros[i])
        console.log(`${Anumeros[i]}*${ramdom}=${multi[i]}`)
        alert(Aimpares)
    }
}
//Ejercicio 8
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let dni=Number(prompt('Digite su dni'))
if(dni<0 || dni.length>8)
{
    console.log('El numero proporcionado no es valido')
    dni=Number(prompt('Digite su dni Nuevamente'))
}
//ejericio 9
//Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
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
console.log(`La palabra ${palabra} tiene ${contvocales} vocales y ${contconsonantes} consonantes`)
//Ejercicio 10
//Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
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
if(cont==0)
{
    console.log('El color no se encuentra en el array')
}
else
{
    console.log('El color se encuentra en el array')
}
