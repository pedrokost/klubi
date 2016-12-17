import Ember from 'ember';

export default Ember.Component.extend({
  address: null,
  formattedAddress: null,
  geocoder: null,
  marker: null,
  map: null,
  ready: false,
  geocodingInvalid: true,
  geocodingFailed: false,
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

  showAddressOnMap(position) {
    var map = this.get('map');
    var marker = this.get('marker');

    map.setZoom(16);
    map.setCenter(position);
    marker.setPosition(position);
  },

  updateMap() {
    var ready = this.get('ready');
    if (!ready) { return; }

    var geocoder = this.get('geocoder');
    var address = this.get('address');

    var that = this;

    if (address) {
      geocoder.geocode( {
        address,
        region: 'sl'
      }, function(results, status) {
        that.set('geocodingInvalid', status !== google.maps.GeocoderStatus.OK);
        that.set('geocodingFailed', status !== google.maps.GeocoderStatus.OK);

        if (status === google.maps.GeocoderStatus.OK) {
          let latitude = results[0].geometry.location.lat();
          let longitude = results[0].geometry.location.lng();
          let formattedAddress = results[0].formatted_address;
          let town = results[0].address_components.find((component) =>{
              return component.types.includes('postal_town');
            }
          )
          town = town ? town.long_name : null;

          that.set('latitude', latitude);
          that.set('longitude', longitude);
          that.get('marker').setOpacity(1);
          that.set('formattedAddress', formattedAddress);

          that.sendAction('action', latitude, longitude, formattedAddress, town);

          that.showAddressOnMap(results[0].geometry.location);
        }
      });
    }
  },

  listenForTypingPause: Ember.observer('address', 'ready', function() {
    this.set('latitude', null);
    this.set('longitude', null);
    this.set('formattedAddress', '...');
    this.set('town', null);
    this.set('geocodingInvalid', true);
    this.set('geocodingFailed', false);
    this.get('marker').setOpacity(0.2);
    Ember.run.debounce(this, this.updateMap, 250);
  })
});
