import MarkerCollectionLayer from '../layers/marker-collection';

var options = {
  maxClusterRadius: 80,
  // disableClusteringAtZoom: 12, // This not cause cause overlapping markers
  // to spiderify at that zoom... so useless
  zoomToBoundsOnClick: true,
  spiderfyOnMaxZoom: true,
  removeOutsideVisibleBounds: false // Testing if true is the cause for marker dissapearance
};

export default EmberLeaflet.ContainerLayer.extend({
  childLayers: [ MarkerCollectionLayer ],
  _newLayer: function() {
    return new L.MarkerClusterGroup(options);
  }
});
