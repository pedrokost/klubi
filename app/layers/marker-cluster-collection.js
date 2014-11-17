import MarkerCollectionLayer from '../layers/marker-collection';


export default EmberLeaflet.ContainerLayer.extend({
  childLayers: [ MarkerCollectionLayer ],
  _newLayer: function() {
    return new L.MarkerClusterGroup();
  }
});
