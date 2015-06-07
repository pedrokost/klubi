import MarkerClusterCollection from '../layers/marker-cluster-collection';
import Ember from 'ember';

import MarkerCollectionLayer from '../layers/marker-collection';
// import GoogleMapLayer from '../layers/google-map-layer';
import FoursquareMapLayer from '../layers/foursquare-map-layer';

L.Icon.Default.imagePath = 'https://d3s8w0mc0h7w8s.cloudfront.net/assets/images'; // substitute your media path

var southWest = L.latLng(45.0, 13.0),   // spodaj levo
    northEast = L.latLng(47.2, 17);   // zgoraj desno


export default EmberLeaflet.MapView.extend({

  setOffsetCenter: Ember.observer('wantedCenter', function(){
    var markerLoc = this.get('wantedCenter');
    var zoom = this.get('zoom');

    var containrWidth = Ember.$('.leaflet-container').width();
    var perc = 0.22;

    var inPxs = this._layer.options.crs.latLngToPoint(markerLoc, zoom);
    inPxs.x = inPxs.x + containrWidth * perc;
    var inLls = this._layer.options.crs.pointToLatLng(inPxs, zoom);

    this.set('center', inLls);

    // This fixes a bug:
    // Hover on card -- marker goes to wanted location
    // Click on card -- marker gets moved to the left and stays there (expected to not move)
    // The lines below case the computed property to be recomputed -- thus reseting
    // the marker location and correcting the issue

    Ember.run.later(this, function() {
      this.set('center', null);
      Ember.run.later(this, function(){
        this.set('center', inLls);
      }, 200);
    }, 200);

  }),

  options: {
    attributionControl: false,
    minZoom: 8,
    // maxZoom: 10, // required for auto spiderification of overlapping markers
    maxBounds: L.latLngBounds(southWest, northEast),
    zoomControl: false // added later with extra options
  },
  childLayers: [
    FoursquareMapLayer,
    // MarkerCollectionLayer,
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

