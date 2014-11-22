import KlubMarker from './klub-marker';

export default EmberLeaflet.MarkerCollectionLayer.extend({
  contentBinding: 'controller',
  itemLayerClass: KlubMarker
});
