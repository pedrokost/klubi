import MarkerCollectionLayer from '../layers/marker-collection';
import ContainerLayer from 'ember-leaflet/layers/container';

var options = {
  maxClusterRadius: 80,
  // disableClusteringAtZoom: 12, // This not cause cause overlapping markers
  // to spiderify at that zoom... so useless
  zoomToBoundsOnClick: true,
  spiderfyOnMaxZoom: true,
  removeOutsideVisibleBounds: false // Testing if true is the cause for marker dissapearance
};

export default ContainerLayer.extend({
  childLayers: [ MarkerCollectionLayer ],
  _newLayer() {
    return new L.MarkerClusterGroup(options);
  }
});
