import MarkerClusterCollection from '../layers/marker-cluster-collection';
// import GoogleMapLayer from '../layers/google-map-layer';
import FoursquareMapLayer from '../layers/foursquare-map-layer';

L.Icon.Default.imagePath = 'https://d3s8w0mc0h7w8s.cloudfront.net/assets/images'; // substitute your media path

var southWest = L.latLng(45.0, 13.0),   // spodaj levo
    northEast = L.latLng(47.2, 17);   // zgoraj desno


export default EmberLeaflet.MapView.extend({
  options: {
    attributionControl: false,
    minZoom: 8,
    // maxZoom: 10, // required for auto spiderification of overlapping markers
    maxBounds: L.latLngBounds(southWest, northEast),
    zoomControl: false
  },
  childLayers: [
    FoursquareMapLayer,
    MarkerClusterCollection
  ],
  didCreateLayer: function() {
    this._super();
    var options = {
      position: 'bottomleft',
      zoomInTitle: 'Približaj',
      zoomOutTitle: 'Oddalji'
    };
    L.control.zoom(options).addTo(this._layer);
  }
});

