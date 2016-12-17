import Ember from 'ember';

export default Ember.Component.extend({
  address: null,
  formattedAddress: null,
  geocoder: Ember.inject.service(),
  geocodingInvalid: true,
  geocodingFailed: false,
  classNames: ['address-shower'],
  classNameBindings: ['geocodingInvalid'],

  zoom: 9,
  mapLocation: [46.0569465, 14.5057515],

  initialize: Ember.on('didInsertElement', function() {
    this.updateMap();
  }),

  updateMap() {
    var geocoder = this.get('geocoder');
    var address = this.get('address');
    var that = this;

    if (address) {
      geocoder.geocode(address).then(function({status, results}) {

        // Because of the components used in geocoding, if no match is found
        // google returns "Slovenia" with the "OK" status.
        const okStatus = status === 'OK' && results[0].formatted_address !== 'Slovenija';

        that.set('geocodingInvalid', !okStatus);
        that.set('geocodingFailed', !okStatus);

        if (okStatus) {
          const latitude = results[0].geometry.location.lat;
          const longitude = results[0].geometry.location.lng;
          const formattedAddress = results[0].formatted_address;
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
