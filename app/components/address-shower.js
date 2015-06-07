import Ember from 'ember';

export default Ember.Component.extend({
  address: null,
  geocoder: null,
  marker: null,
  map: null,
  ready: false,
  geocodingInvalid: true,
  classNames: ['address-shower'],
  classNameBindings: ['geocodingInvalid'],

  latitude: null,
  longitude: null,

  initialize: Ember.on('didInsertElement', function() {
    this.set('geocoder', new google.maps.Geocoder());

    var latlng = new google.maps.LatLng(46.0569465, 14.5057515);
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    var map = new google.maps.Map(document.getElementById('address-shower-map'), mapOptions);
    var marker = new google.maps.Marker({
      map: map,
      position: latlng
    });
    this.set('map', map);
    this.set('marker', marker);
    this.set('ready', true);

  }),

  showAddressOnMap: function(position) {
    var map = this.get('map');
    var marker = this.get('marker');

    map.setZoom(16);
    map.setCenter(position);
    marker.setPosition(position);
  },

  updateMap: function() {
    var ready = this.get('ready');
    if (!ready) { return; }

    var geocoder = this.get('geocoder');
    var address = this.get('address');
    var that = this;

    geocoder.geocode( {
      address,
      region: 'sl'
    }, function(results, status) {
      that.set('geocodingInvalid', status !== google.maps.GeocoderStatus.OK);

      if (status == google.maps.GeocoderStatus.OK) {
        // console.log(results[0].geometry.location);
        let latitude = results[0].geometry.location.lat();
        let longitude = results[0].geometry.location.lng();
        that.set('latitude', latitude);
        that.set('longitude', longitude);
        that.get('marker').setOpacity(1);
        that.sendAction('action', latitude, longitude);
        that.showAddressOnMap(results[0].geometry.location);
      } else {
        console.error('Geocode was not successful for the following reason: ' + status);
      }
    });
  },

  listenForTypingPause: Ember.observer('address', 'ready', function() {
    this.set('latitude', null);
    this.set('longitude', null);
    this.set('geocodingInvalid', true);
    this.get('marker').setOpacity(0.2);
    Ember.run.debounce(this, this.updateMap, 250);
  })
});
