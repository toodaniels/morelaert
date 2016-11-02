
$(function () {
	$("#send").click(function () {
		
		if (navigator.geolocation) {
	      function exito(pos) {
	      	var fecha = new Date()
			var hora = fecha.getHours()
	        var datos ={
			lat: pos.coords.latitude,
    		lng: pos.coords.longitude ,
			hora:hora,
			tipo:1
			}
	        $.getJSON('http://lockclosed.herokuapp.com/send', datos, function(data) {
        	console.log(JSON.stringify(data));
        	alert("se enviaron correctamente");
      		});
	      }
	      function falla(error) {
	        alert('Error en servicio Geolocalizador');
	      }
	      var options = {maximumAge: 500000, enableHighAccuracy:true, timeout: 5000};
	        navigator.geolocation.getCurrentPosition(exito, falla, options );
	    }
      else {
        alert('Error en servicio Geolocalizador');
      	}
	  

	  return false;
	});


	$("#send1").click(function () {
		
		if (navigator.geolocation) {
	      function exito(pos) {
	      	var fecha = new Date()
			var hora = fecha.getHours()
	        var datos ={
			lat:  pos.coords.latitude,
    		lng: pos.coords.longitude ,
			hora:hora,
			tipo:2
			}
	        $.getJSON('http://lockclosed.herokuapp.com/send', datos, function(data) {
        	console.log(JSON.stringify(data));
        	alert("se enviaron correctamente");
        
      		});
	      }
	      function falla(error) {
	        alert('Error en servicio Geolocalizador');
	      }
	      var options = {maximumAge: 500000, enableHighAccuracy:true, timeout: 5000};
	        navigator.geolocation.getCurrentPosition(exito, falla, options );
	    }
      else {
        alert('Error en servicio Geolocalizador');
      	}
	  

	  return false;
	});

	$("#send2").click(function () {
		
		if (navigator.geolocation) {
	      function exito(pos) {
	      	var fecha = new Date()
			var hora = fecha.getHours()
	        var datos ={
			lat: pos.coords.latitude,
    		lng: pos.coords.longitude ,
			hora:hora,
			tipo:3
			}
	        $.getJSON('http://lockclosed.herokuapp.com/send', datos, function(data) {
        	console.log(JSON.stringify(data));
        	alert("se enviaron correctamente");
        
      		});
	      }
	      function falla(error) {
	        alert('Error en servicio Geolocalizador');
	      }
	      var options = {maximumAge: 500000, enableHighAccuracy:true, timeout: 5000};
	        navigator.geolocation.getCurrentPosition(exito, falla, options );
	    }
      else {
        alert('Error en servicio Geolocalizador');
      	}
	  

	  return false;
	});






});
