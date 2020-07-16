window.initMap = function() {
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {lat: 39.7392, lng: -104.9903}
    });

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function(location, i) {
      return new google.maps.Marker({
        position: location,
        label: (i + 1).toString()
      });
    });

    var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'node_modules/@google/markerclustererplus/images/m'});
}

var locations = [
  {lat: 39.755181, lng: -104.976969}, //1
  {lat: 39.757122, lng: -104.965402}, //2
  {lat: 39.753065, lng: -104.966821}, //3
  {lat: 39.766934, lng: -104.974634}, //4
  {lat: 39.754652, lng: -104.977822}, //5
  {lat: 39.652772, lng: -104.810932}, //6
  {lat: 39.637558, lng: -104.788581}, //7
  {lat: 39.786002, lng: -104.881788}, //8
  {lat: 39.739366, lng: -104.994911}, //9
  {lat: 39.751438, lng: -105.025417}, //10
  {lat: 39.739843, lng: -104.960110}, //11
  {lat: 39.733569, lng: -104.899134}, //12
  {lat: 39.757127, lng: -104.959111}, //13
  {lat: 39.757418, lng: -104.940903}, //14
  {lat: 39.625259, lng: -104.907112}, //15
  {lat: 39.718567, lng: -104.992328}, //16
  {lat: 39.758176, lng: -105.045001}, //17
  {lat: 39.737314, lng: -105.015059}, //18
  {lat: 39.746228, lng: -104.994578}, //19
  {lat: 39.676377, lng: -104.848038}, //20
  {lat: 39.739925, lng: -104.931699}, //21
  {lat: 39.725753, lng: -104.971998}, //22
  {lat: 39.689096, lng: -104.922826}, //23
  {lat: 39.699618, lng: -105.111360}, //24
  {lat: 39.785468, lng: -104.770886}, //25
  {lat: 39.653325, lng: -104.873396}, //26
  {lat: 39.729076, lng: -104.996701}, //27
  {lat: 39.728283, lng: -104.998405}, //28
  {lat: 39.739998, lng: -104.953705}, //29
  {lat: 39.740493, lng: -104.904459}, //30
  {lat: 39.739337, lng: -104.904379}, //31
  {lat: 39.740419, lng: -104.928901}, //32
  {lat: 39740340., lng: -104.923112}, //33
  {lat: 39.740332, lng: -104.902066}, //34
  {lat: 39.748608, lng: -104.056990}, //35
  {lat: 39.593858, lng: -104.928522}, //36
  {lat: 39.740288, lng: -104.920759}, //37
  {lat: 39.739943, lng: -104.919094}, //38
  {lat: 39.751326, lng: -104.999582}, //39
  {lat: 39.750434, lng: -104.984252}, //40
  {lat: 39.786011, lng: -104.892561}, //41
  {lat: 39.763661, lng: -104.922762}, //42
  {lat: 39.740728, lng: -104.798512}, //43
  {lat: 39.594213, lng: -104.876588}, //44
  {lat: 39.764696, lng: -104.960312}, //45
  {lat: 39.582076, lng: -104.959186}, //46
  {lat: 39.781223, lng: -104.771375}, //47
  {lat: 39.594183, lng: -104.926665}, //48
  {lat: 39.757923, lng: -104.940309}, //49
  {lat: 39.675430, lng: -104.868895}, //50
  {lat: 39.732307, lng: -105.003226}, //51
  {lat: 39.752430, lng: -104.981590}, //52
  {lat: 39.733724, lng: -104.899211}, //53
]

//to do:
//finish accruing info
//database
//CSS (scrollable list)
//heroku