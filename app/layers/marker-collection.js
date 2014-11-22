import KlubMarker from './klub-marker-layer';

export default EmberLeaflet.MarkerCollectionLayer.extend({
  contentBinding: 'controller.layers',
  itemLayerClass: KlubMarker
});
