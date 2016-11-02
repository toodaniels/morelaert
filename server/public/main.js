//variable para conectarse a un servidor de sockets
var socket=io.connect('http://localhost:8080',{"forceNew":true});

tablaencabezado=`
  <div>
    <tr>
      <th>Latitud</th>
      <th>longitud</th>
      <th>Fecha</th>
      <th>Hora</th>
    </tr>
    `;
tablacuerpo=``;

socket.on("alerta",function(data)
{
  //var datos=JSON.stringify(data)
 //console.log(data["hora"]);
 render(data);
});

function render(data)//obtiene los datos que mando el servidor y los inserta en html
{
  var tem_tabla= data.map(function(elem,index)
    {
      return(`
          <tr>
            <td>${elem.latitud}</td>
            <td>${elem.longitud}</td>
            <td>${elem.hora}</td>
            <td>${elem.tipo}</td>
          </tr>
            `);
    }).join(" ");

  tablacuerpo= tem_tabla+" "+ tabla_cuerpo +" "+ ` </div>`;
  document.getElementById("alertas").innerHTML=tablaencabezado+tablacuerpo;// insertar el html en el elemento div identificado por messages
}
// function render (data)
// {
//   var html= `<div>
//               <strong>${data.tipo}</strong>`;
//
//   document.getElementById("alertas").innerHTML=html;
// }
