import MarkerClusterCollection from '../layers/marker-cluster-collection';
// import GoogleMapLayer from '../layers/google-map-layer';
import FoursquareMapLayer from '../layers/foursquare-map-layer';

var southWest = L.latLng(45.0, 13.0),   // spodaj levo
    northEast = L.latLng(47.2, 17);   // zgoraj desno

export default EmberLeaflet.MapView.extend({
  options: {
    attributionControl: false,
    minZoom: 8,
    maxBounds: L.latLngBounds(southWest, northEast)
  },
  childLayers: [
    FoursquareMapLayer,
    MarkerClusterCollection
  ]
});
