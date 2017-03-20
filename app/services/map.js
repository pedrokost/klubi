/* globals L */
import Ember from 'ember';

var southWest = L.latLng(44.0, 12.0), // spodaj levo
  northEast = L.latLng(48, 18) // zgoraj desno


export default Ember.Service.extend({
  zoom: 8,
  markerCenter: [46.122636, 14.81546], // Slivna, Slovenia
  maxBounds: L.latLngBounds(southWest, northEast),

  zoomToLocation(location, zoomLevel) {
    this.setProperties({
      zoom: zoomLevel,
      center: location
    })
  }
});
