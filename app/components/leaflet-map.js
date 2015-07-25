// import Ember from 'ember';
import MarkerClusterCollection from '../layers/marker-cluster-collection';
import EmberLeafletComponent from 'ember-leaflet/components/leaflet-map';
import MarkerCollectionLayer from '../layers/marker-collection';
// import GoogleMapLayer from '../layers/google-map-layer';
import FoursquareMapLayer from '../layers/foursquare-map-layer';

var southWest = L.latLng(45.0, 13.0),   // spodaj levo
    northEast = L.latLng(47.2, 17);   // zgoraj desno

export default EmberLeafletComponent.extend({

  setOffsetCenter: Ember.observer('wantedCenter', 'wantedZoom', 'isShowPage', 'layer', function(){

    var wantedCenter = this.get('wantedCenter');
    var wantedZoom = this.get('wantedZoom');

    if (this.get('layer')) { // It's not always defined
      let map = this.get('layer');

      if (this.get('isShowPage')) {
        let containrWidth = Ember.$('.leaflet-container').width();
        let perc = 0.22;
        let targetPoint = map.project(wantedCenter, wantedZoom).add([containrWidth * perc, 0]);
        wantedCenter = map.unproject(targetPoint, wantedZoom);
      }

      // SetView is preferred over setting center and zoom in succession.
      // It also doesn't seem to cause the markers to dissapear when both
      // center and zoom are changed
      map.setView(wantedCenter, wantedZoom);
      // map.flyTo(wantedCenter, wantedZoom); // This is in the v1.0 beta 1 branch that there is another bug with this._southWest being undefined, so I cant use it until it will be fixed in beta 2 (https://github.com/Leaflet/Leaflet/issues/3280)
    }
  }),

  options: {
    attributionControl: false,
    minZoom: 8,
    center: L.latLng(46.122636,14.81546),
    // maxZoom: 10, // required for auto spiderification of overlapping markers
    maxBounds: L.latLngBounds(southWest, northEast),
    zoomControl: false // added later with extra options
  },
  childLayers: [
    FoursquareMapLayer,
    // MarkerCollectionLayer
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

