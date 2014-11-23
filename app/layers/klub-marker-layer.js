import HighlightedIcon from './highlighted-icon';

export default EmberLeaflet.MarkerLayer.extend(
  // EmberLeaflet.PopupMixin,
  {
    // popupContentBinding: 'content.title'
    click: function(e) {
      window.pubsub.publish('klub.clicked', e.target.content.id);
    },
    mouseover: function(e) {
      window.pubsub.publish('klub.hovered', e.target.content.id);
    },
    mouseout: function(e) {
      window.pubsub.publish('klub.unhovered');
    }
  }
);
