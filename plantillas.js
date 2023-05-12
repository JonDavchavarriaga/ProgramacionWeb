const datosVehiculos= [{
    nombre: "Land Rover Range Rover",
    descripcion: "El Land Rover Range Rover es un SUV de lujo con un estilo elegante y una presencia imponente en la carretera. Ofrece una gran comodidad tanto en la conducción como en el habitáculo, junto con una gran capacidad todoterreno. Viene equipado con tecnologías avanzadas de seguridad y conectividad, y cuenta con una amplia gama de opciones de personalización.",
    precio: "$95,950",
    cantidad: 80000,
    foto: "https://th.bing.com/th/id/R.c2a0f6baeea6a708b89568c4e846179e?rik=qj5ip1Jvn26Ndw&pid=ImgRaw&r=0",
},
{
    nombre: "Mercedes-Benz GLE",
    descripcion: " El Mercedes-Benz GLE es un SUV de alta gama con un diseño deportivo y elegante. Ofrece una experiencia de conducción dinámica y un interior espacioso y lujoso, con materiales de alta calidad y tecnologías avanzadas. Cuenta con una amplia gama de motores, desde eficientes diésel hasta potentes V8, y viene equipado con características de seguridad y confort de última generación.",
    precio: "$54,750",
    cantidad: 300000,
    foto: "https://th.bing.com/th/id/OIP.JvJ-BOhJ31gKCTGFsn7BcQHaEo?pid=ImgDet&rs=1",
},
{
    nombre: "BMW X7",
    descripcion: "El BMW X7 es un SUV de gran tamaño y lujo que ofrece una gran comodidad y una amplia gama de tecnologías avanzadas. Ofrece un gran rendimiento tanto en la carretera como fuera de ella, y viene equipado con una gran cantidad de características de seguridad y confort. Su interior espacioso y lujoso cuenta con materiales de alta calidad y una gran cantidad de opciones de personalización.",
    precio: "$74,900",
    cantidad: 60000,
    foto: "https://i.redd.it/1febmey91at21.jpg",
},
{
    nombre: "Audi Q8",
    descripcion: "El Audi Q8 es un SUV de alta gama con un diseño elegante y deportivo. Ofrece una gran comodidad en la conducción y en su interior lujoso y espacioso, que cuenta con tecnologías avanzadas y materiales de alta calidad. Viene equipado con una amplia gama de características de seguridad y confort, y cuenta con una gran variedad de opciones de personalización.",
    precio: "$69,200",
    cantidad: 30000,
    foto: "https://th.bing.com/th/id/OIP.zOz75Qe4x-q-2YFRQ4uvRgHaE8?pid=ImgDet&rs=1",
},
];

function plantilla(datosVehiculos) {
return `<div class="ficha-producto">
<img class="foto" src=${datosVehiculos.foto}><div><h2 class="nombre">${datosVehiculos.nombre}</h2><p class="precio">Precio: ${datosVehiculos.precio}</p>
<p class="cantidad">Cantidad Producida: ${datosVehiculos.cantidad}</p><p class="descripcion">${datosVehiculos.descripcion}</p>
<button class="btn">Cotizar</button>
</div></div>`;
}
const p1 = (document.getElementById("app").innerHTML = `<h1>SUV MAS CODICIADAS DEL MERCADO</h1> 
${datosVehiculos.map(plantilla).join("")} 
<p class="cantidad">Periodicamente entraran nuevas SUV al mercado verifica constantemente la pagina</p><br>`);