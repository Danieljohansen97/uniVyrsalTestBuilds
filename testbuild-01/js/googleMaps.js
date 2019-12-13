function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    
    // Draw initial map
    function initMap() {
        directionsService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer();
        var myPos = new google.maps.LatLng(lat, long);
        var mapOptions = {
          zoom:12,
          center: myPos
        }
        var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
        directionsRenderer.setMap(map);
      }
      initMap();
}



function redrawMap() {
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    var myPos = new google.maps.LatLng(lat, long);
    var mapOptions = {
      zoom:7,
      center: myPos
    }
    var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
    directionsRenderer.setMap(map);
  }
  
  // Calculate route function
  // Called on submit from form
  function calcRoute() {
    var start = document.getElementById('startDest').value;
    console.log("Start: " + start);
    var end = document.getElementById('endDest').value;
    console.log("End: " + end);
    var request = {
      origin: start,
      destination: end,
      travelMode: 'TRANSIT'
    };
    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(result);
      }
    });
  }

  const dirForm = document.querySelector("#directionForm");

  // directionForm submit event listener
  dirForm.addEventListener("submit", (e) => {  
    e.preventDefault();
    calcRoute();
  });
  