/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


var carouselPlace = '<div class="flex-box"> \
                      <div class="carouselPlace flex-item"> \
                        <div id="myCarousel" class="carousel slide" data-ride="carousel"> \
                          <!-- Indicators --> \
                          <ol class="carousel-indicators"> \
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li> \
                            <li data-target="#myCarousel" data-slide-to="1"></li> \
                            <li data-target="#myCarousel" data-slide-to="2"></li> \
                            <li data-target="#myCarousel" data-slide-to="3"></li> \
                          </ol> \
                          <!-- Wrapper for slides --> \
                          <div class="carousel-inner" role="listbox"> \
                            <div class="item active"> \
                              <img class="slide-image" src="images/Matrix.jpg" style="height:210px"> \
                                <div class="carousel-caption"> \
                                  <h3>Web Design</h3> \
                                  <p class="image-description">Just starting out, but getting better everyday.</p> \
                                </div> \
                            </div> \
                            <div class="item"> \
                              <img class="slide-image" src="images/cells.jpg" style="height:210px"> \
                                <div class="carousel-caption"> \
                                  <h3>Biological Research</h3> \
                                  <p class="image-description">From high-throughput screening, to protein purification, to whole-cell recording, I am proficient in a vast array of laboratory procedures.</p> \
                                </div> \
                              </div> \
                              <div class="item"> \
                                <img class="slide-image" src="images/books.jpg" style="height:210px"> \
                                  <div class="carousel-caption"> \
                                    <h3>Writing</h3> \
                                    <p class="image-description">Fiction and non-fiction.</p> \
                                  </div>\
                              </div> \
                              <div class="item"> \
                                <img class="slide-image" src="images/Color_Wheel.png" style="height:210px"> \
                                  <div class="carousel-caption"> \
                                    <h3>Graphic Design</h3> \
                                    <p class="image-description">Proficient with Adobe Photoshop, Illustrator, InDesign and Edge.</p> \
                                  </div> \
                              </div> \
                            </div> \
                            <!-- Left and right controls --> \
                              <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"> \
                              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> \
                              <span class="sr-only">Previous</span> \
                            </a> \
                            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"> \
                              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> \
                              <span class="sr-only">Next</span> \
                            </a> \
                          </div> \
                        </div> \
                      </div> \
                    </div>';



/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<br><p class="roleHeader">%data%</p>';

var HTMLcontactGenericIcon = '<li class="flex-item icons">%contact%</li>';
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<div class="col-md-4"><img src="%data%" class="biopic" id="#biop" data-toggle="modal" data-target="#biopicDescription"></div>';
var HTMLwelcomeMsg = '<div class="welcome-message">%data%</div>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>'+ carouselPlace;
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<br><p class=job-description>Job Description:<br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a class="project-title" href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img class="projectImage" src="%data%"><hr>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a class="schoolName" href="#" target="_blank">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<div class="major-field">Major: %data%</div>';
var HTMLschoolHonors = '<div class="honors-dissertation">Honors: %data%</div>';
var HTMLschoolDissertation = '<div class="honors-dissertation">Title of Disseration: %data%</div>';
var HTMLschoolField = '<div class="major-field">Field of Study: %data%</div>';

var HTMLonlineClasses = '<br><hr class="eduSplit"><div class="onlineSection">Online Classes</div>';
var HTMLonlineStart = '<div class="online-entry"></div>';
var HTMLonlineTitle = '<a class="schoolName" href="#" target="_blank">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="online-date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#" target="_blank" class="onlineURL">%data%</a>';

var internationalizeButton = '<button class="ibutton">Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('.ibutton').click(function() {
    var iName = inName("marc anderson") || function(){};
    $('#name').html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = event.pageX;
  var y = event.pageY;
  return logClicks(x,y);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contact_info.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  var openedInfoWindow = null;
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window
      var urlWeather = 'http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}?format=application/json';
      var formattedurlWeather = urlWeather.replace('{lat}', lat).replace('{lon}', lon);
    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    //get revelevant data object from Open Weather Map by replacing lat and lon with coordinates of city marker.

    function onDataReceived(data) {
        console.log(data);
        //convert temperature in Kelvin to degrees fahrenheit
        var tempFar = ((data.main.temp - 273.15)* 1.8000 + 32.00).toFixed(1);
        var humidity = (data.main.humidity + '% Humdity');
        var conditions = data.weather[0].description;
        var formattedConditions = conditions.toUpperCase();
        $("#temp").text(tempFar);
        $("#humid").text(humidity);
        $("#condition").text(formattedConditions);
    }

    var infoWindow = new google.maps.InfoWindow({
      content: '<div class="map-marker">' + name + '</div><br><div class="weatherConditions"><span id="condition"></span><br><i class="wi wi-thermometer therm"></i><span id="temp"></span><i class="wi wi-fahrenheit therm"></i><br><span id="humid"></span></div>'
    });

//modified function that closes any open marker before opening another
    google.maps.event.addListener(marker, 'click', function() {
      if (openedInfoWindow != null)
            openedInfoWindow.close();
      infoWindow.open(map,marker);
      $.get(formattedurlWeather, onDataReceived);
      openedInfoWindow = infoWindow;
      google.maps.event.addListener(infoWindow, 'closeclick', function() {
            openedInfoWindow = null;
      });
    google.maps.event.addListener(map, 'click', function() {
        infoWindow.close();
      }) ;
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
map.fitBounds(mapBounds);
});


