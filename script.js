function getLocation(currentTime) {
  itinerary = [
    {
      //moment("2017-10-7 00:00:00"), 
      location: 'Positano',
      dateArrive: moment.tz("2017-10-4 00:00:00", 'Europe/Rome'),
      dateDepart: moment.tz("2017-10-6 23:59:59", 'Europe/Rome'),
      timezone: 'Europe/Rome'
    },
    {
      location: 'Athens',
      dateArrive: moment.tz("2017-10-7 00:00:00", 'Europe/Athens'),
      dateDepart: moment.tz("2017-10-8 23:59:59", 'Europe/Athens'),
      timezone: 'Europe/Athens'
    },
    {
      location: 'Mykonos',
      dateArrive: moment.tz("2017-10-9 00:00:00", 'Europe/Athens'),
      dateDepart: moment.tz("2017-10-10 23:59:59", 'Europe/Athens'),
      timezone: 'Europe/Athens'
    },
    {
      location: 'Santorini',
      dateArrive: moment.tz("2017-10-11 00:00:00", 'Europe/Athens'),
      dateDepart: moment.tz("2017-10-14 3:34:59", 'Europe/Athens'),
      timezone: 'Europe/Athens'
    },
    {
      location: 'the sky, on the way home',
      dateArrive: moment.tz("2017-10-14 3:35:00", 'Asia/Dubai'), // Departure thens 2:35 PM from , is 3:35 in 
      dateDepart: moment.tz("2017-10-15 11:55:00", 'Asia/Dubai'), // Arrival Dubai time
      timezone: 'Asia/Dubai'
    },
    {
      location: 'Sydney',
      dateArrive: moment.tz("2017-10-15 11:55:00", 'Asia/Dubai'), // Departure thens 2:35 PM from , is 3:35 in 
      dateDepart: moment.tz("2099-10-15 11:55:00", 'Australia/Sydney'), // Arrival Dubai time
      timezone: 'Australia/Sydney'
    }
  ];
  console.log('itinerary', itinerary);
  var currentLocation = {};
  itinerary.forEach(function(location, index) {
    if (moment(currentTime).isBetween(location.dateArrive, location.dateDepart)){
      currentLocation = location;
    }
  });
  return currentLocation;
}

function update() {
  var now = new Date();
  var clockFormat = 'h:mm A';
  const loc = getLocation(now);
  $('#location').html('Sakura is currently in ' + loc.location);
  $('#time').html('The time there is ' + moment.tz(now, loc.timezone).format(clockFormat));
}

function finishLoading() {
  $('#loader').fadeOut(500);
  setTimeout(function() {
    $('#info').fadeIn(500);
  }, 500);
}

$( document ).ready(function() {
  setTimeout(finishLoading, 1900); 
  setInterval(update, 1000);
});
