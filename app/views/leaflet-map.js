import MarkerClusterLayer from '../layers/marker-cluster-collection';
import GoogleMapLayer from '../layers/google-map-layer';

var southWest = L.latLng(45.0, 13.0),   // spodaj levo
    northEast = L.latLng(47.2, 17);   // zgoraj desno

export default EmberLeaflet.MapView.extend({
  options: {
    attributionControl: false,
    minZoom: 8,
    maxBounds: L.latLngBounds(southWest, northEast)
  },
  childLayers: [
    GoogleMapLayer,
    MarkerClusterLayer
  ],
  subscribeToKlubHovered: function() {
    window.pubsub.subscribe('klub.hovered', function(id){
      this.get('controller').send('highlightKlub', id);
    }.bind(this));
    window.pubsub.subscribe('klub.unhovered', function(){
      this.get('controller').send('unHighlightKlub');
    }.bind(this));
  }.on('didInsertElement'),
  unsubscribeFromKlubHovered: function () {
    window.pubsub.unsubscribe('klub.hovered');
    window.pubsub.unsubscribe('klub.unhovered');
  }.on('willDestroyElement')
});
