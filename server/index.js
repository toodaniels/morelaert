var express=require("express");
//var bodyParser=require("body-parser");//middleware para servir archivos estaticos
var app=express();//ejecuta el servidor express
//var informacion=require("./models/informacion").informacion;
var server=require("http").Server(app)
var io=require("socket.io").listen(server);//servidor de sockets

app.use(express.static("public"));//establecemos los archivos estaticos a
app.set('port', (process.env.PORT || 5000));
//centros de ayuda
app.set('view engine', 'ejs');
var centros=
{
  0:
  {
      tipo:"1",
      nombre:"Policia Preventiva Municipal",
      lat:18.8008591,
      lng:-98.9687266
   },
   1:
   {
       tipo:"1",
       nombre:"Policia Municipal Preventiva de Cuautla",
       lat:18.852019,
       lng:-98.936948
    },
  2:
  {
      tipo:"1",
      nombre:"Policia Federal de Cuautla",
      lat:18.836017,
      lng:-98.944437
   },
   3:
   {
       tipo:"2",
       nombre:"Cuerpo de bomberos",
       lat:18.8051348,
       lng:-98.9328679
    },
    4:
    {
        tipo:"1",
        nombre:"Policia Municipal Preventiva de Cuautla",
        lat:18.852019,
        lng:-98.936948
     },
   5:
   {
       tipo:"3",
       nombre:"Hospital General de Zona Cuautla",
       lat:18.8161944,
       lng:-98.9546797
    },
    6:
    {
        tipo:"3",
        nombre:"ISSSTE",
        lat:18.8138184,
        lng:-98.9496279
     },
     7:
     {
         tipo:"3",
         nombre:"Hospital General de Cuautla",
         lat:18.845518,
         lng:-98.9413057
      },
}

var alertas=
[
  {
    lat:18.8232794,
    lng:-98.9500256,
    hora:9,
    tipo:3
  },
  {
    lat:18.8259353,
    lng:-98.9503613,
    hora:7,
    tipo:2
  },
  {
    lat:18.8237112,
    lng:-98.9470818,
    hora:10,
    tipo:1
  },
  {
    lat:18.8255687,
    lng:-98.9465481,
    hora:11,
    tipo:2
  },
  {
    lat:18.8364121,
    lng:-98.9445426,
    hora:5,
    tipo:3
  }
];

io.on("connection",function(socket){

});

app.get("/",function(req,res)
{
  res.render("index");
});

app.get("/get",function(req,res){
  res.header("Access-Control-Allow-Origin","*");
  res.send(centros);
});

app.get("/admin",function(req,res){
  res.render("admin");
});

app.get("/getalertas",function(req,res){
  res.header("Access-Control-Allow-Origin","*");
  res.send(alertas);
});

app.get("/send",function(req,res){
  datos={
    lat:parseFloat(req.query.lat),
    lng:parseFloat(req.query.lng),
    hora:req.query.hora,
    tipo:req.query.tipo
  }

  alertas.push(datos);
  io.sockets.emit("alerta",datos);//se manda la ultima alerta a todos los sockets
  var status=true;
  res.header("Access-Control-Allow-Origin","*");
  res.send({"status":status});

});



app.get("/exportBD", function (req,res) {
	console.log("Export BD");
	informacion.find(function (err,doc) {  // busca en el modelo
		 res.header("Access-Control-Allow-Origin", "*");
    	res.send(doc);
	});

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
