import MarkerCollectionLayer from '../layers/marker-collection';

var options = {
  maxClusterRadius: 80,
  disableClusteringAtZoom: 12,
};

export default EmberLeaflet.ContainerLayer.extend({
  childLayers: [ MarkerCollectionLayer ],
  _newLayer: function() {
    return new L.MarkerClusterGroup(options);
  }
});
