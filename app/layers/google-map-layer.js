
var zatresiStyles = [{
  "featureType": "water",
  "elementType": "all",
  "stylers": [{
      "hue": "#C6C9FF"
  }, {
      "saturation": 100
  }, {
      "lightness": 67
  }, {
      "visibility": "simplified"
  }]
}, {
  "featureType": "landscape",
  "elementType": "all",
  "stylers": [{
      "hue": "#ffffff"
  }, {
      "saturation": -100
  }, {
      "lightness": 65
  }, {
      "visibility": "on"
  }]
}, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{
        "hue": "#bbc0c4"
    }, {
        "saturation": -93
    }, {
        "lightness": 31
    }, {
        "visibility": "simplified"
    }]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
        "hue": "#e9ebfe"
    }, {
        "saturation": -90
    }, {
        "lightness": -8
    }, {
        "visibility": "simplified"
    }]
}, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [ {
        "saturation": -100
    }, {
        "lightness": 20
    }, {
        "visibility": "simplified"
    }]
}, {
    "featureType": "administrative.locality",
    "elementType": "all",
    "stylers": [{
        "hue": "#2c2e33"
    }, {
        "saturation": 7
    }, {
        "lightness": 19
    }, {
        "visibility": "on"
    }]
}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [{
        "hue": "#bbc0c4"
    }, {
        "saturation": -93
    }, {
        "lightness": 31
    }, {
        "visibility": "on"
    }]
},
{
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [{
        "saturation": -100
    }, {
        "lightness": 40
    }, {
        "visibility": "simplified"
    }]
},
{
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "saturation": -100 },
      { "lightness": 100 }
    ]
  },
{
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [{
        "hue": "#bbc0c4"
    }, {
        "saturation": -93
    }, {
        "lightness": 20
    }, {
        "visibility": "on"
    }]
},
{
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      { "hue": "#ff0022" },
      { "saturation": -92 },
      { "lightness": 24 },
      { "visibility": "on" }
    ]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#ef8c25"
    }, {
        "lightness": 10
    }, {
      "saturation": -80
    }]

},
{
    "featureType": "poi",
    "stylers": [{
        "saturation": -80
    }, {
        "lightness": 50
    },{"visibility":"simplified"}]
},

{
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
    {
        "saturation": 60
    },{
        "color": "##CADFAA"
    }]
}
];



var options = {
  mapOptions: {
    backgroundColor: "#FFFFFF",
    styles: zatresiStyles
  }
};


export default EmberLeaflet.Layer.extend({
  _newLayer: function() {
    return new L.Google("ROADMAP", options);
  }
});


