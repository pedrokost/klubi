import Ember from 'ember';

export default Ember.Component.extend({
  address: null,
  formattedAddress: null,
  geocoder: null,
  geocodingInvalid: true,
  geocodingFailed: false,
  classNames: ['address-shower'],
  classNameBindings: ['geocodingInvalid'],

  zoom: 9,
  mapLocation: [46.0569465, 14.5057515],

  initialize: Ember.on('didInsertElement', function() {
    this.set('geocoder', new google.maps.Geocoder());
    this.updateMap();
  }),

  updateMap() {
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

          that.set('formattedAddress', formattedAddress);

          that.sendAction('action', latitude, longitude, formattedAddress, town);

          that.set('zoom', 14)
          that.set('mapLocation', [latitude, longitude]);
        }
      });
    }
  },

  listenForTypingPause: Ember.observer('address', function() {
    this.set('formattedAddress', '...');
    this.set('town', null);
    this.set('geocodingInvalid', true);
    this.set('geocodingFailed', false);
    Ember.run.debounce(this, this.updateMap, 250);
  })
});
