var Bike = require('./../js/bike.js').bikeModule;

var displayBikes = function(bikes) {
  bikes.forEach(function(bike) {
    if (bike.thumb === null) {
      $('.carousel-inner').append("<div class='item'><img src='img/norman.png'> <div class='carousel-caption'>" + bike.title + "<p>Sorry, no picture of this bike.</p><p>Enjoy a dog on a bike on instead.</p></div></div>")
    } else {
      $('.carousel-inner').append("<div class='item'><img src='" + bike.thumb + "'> <div class='carousel-caption'>" + bike.title + "</div></div>");
    }
  });
};

$(document).ready(function() {
  var bike = new Bike();
  $('#bikes').click(function() {
    bike.getBikes(displayBikes);
    $('#carousel-example-generic').show();
    $('#bikes').hide();
  });
});
