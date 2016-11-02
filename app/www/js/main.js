function initMap() {
  myLatLng = {
    lat: 18.802584,
    lng: -98.932822

  };
  //18.802584, -98.932822
   var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 16
    });


  var defaultPos = new google.maps.LatLng(19.289168, -99.653440);
      $.getJSON('http://lockclosed.herokuapp.com/get', {}, function(data) {
        console.log("Success");
        $("#datos").val(JSON.stringify(data).replace("\"", "").replace("\"", ""));
       


        for (var a = 0; a <=7; a++) {
          var marker = new google.maps.Marker({
            map: map,
            position: data[a],
            title: 'Hello World!'

          });
            if (data[a].tipo==1){
            marker.setIcon('icons/police.png');
            }
            else if (data[a].tipo==2){
            marker.setIcon('icons/warning.png');
            }
            else if (data[a].tipo==3){
              marker.setIcon('icons/health.png');
            }
          console.log(data[a].tipo)

        }
      });


      $.getJSON('http://lockclosed.herokuapp.com/getalertas', {}, function(dato) {
        console.log("Success");
        $("#datos").val(JSON.stringify(dato).replace("\"", "").replace("\"", ""));

        for (var a in dato) {
          var marker1 = new google.maps.Marker({
            map: map,
            position: dato[a],
            title: 'Hello World!'

          });
            if (dato[a].tipo==1){
            marker1.setIcon('icons/exclamationp.png');
            var infowindow = new google.maps.InfoWindow({
            content: '<p>accidente 1</p>'
            });
            }
            if (dato[a].tipo==2){
            marker1.setIcon('icons/exclamationc.png');
            var infowindow = new google.maps.InfoWindow({
            content: '<p>accidente 2</p>'
            });
            }
            if (dato[a].tipo==3){
            marker1.setIcon('icons/exclamationm.png');
            var infowindow = new google.maps.InfoWindow({
            content: '<p>accidente 3</p>'
            });
            }
          console.log(dato[a].tipo)
        }
    });
}



