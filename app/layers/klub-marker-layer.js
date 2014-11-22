export default EmberLeaflet.MarkerLayer.extend(
  // EmberLeaflet.PopupMixin,
  {
    // popupContentBinding: 'content.title'
    mouseover: function(e) {
      window.pubsub.publish('klub.hovered', e.target.content.id);
    },
    mouseout: function(e) {
      window.pubsub.publish('klub.unhovered');
    }
  }
);
