// import Ember from 'ember';

var southWest = L.latLng(45.23, 13.52),   // spodaj levo
    northEast = L.latLng(47.02, 16.65);   // zgoraj desno

export default EmberLeaflet.MapView.extend({
  center: L.latLng(46.2214969, 14.6),
  zoom: 9,
  options: {
    minZoom: 8,
    maxBounds: L.latLngBounds(southWest, northEast)
  }
});
