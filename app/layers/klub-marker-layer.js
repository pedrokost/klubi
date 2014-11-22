import HighlightedIcon from './highlighted-icon';


L.Icon.Big = L.Icon.Default.extend({
    options: {
    iconSize: new L.Point(45, 81),
}});

export default EmberLeaflet.MarkerLayer.extend(
  // EmberLeaflet.PopupMixin,
  {
    // popupContentBinding: 'content.title'
    mouseover: function(e) {
      e.target.setIcon(new HighlightedIcon());
      // e.target.options.icon.shadowSize = [200 200];
      window.pubsub.publish('klub.hovered', e.target.content.id);
      // console.log(e.target.options.icon.shadowSize)
    },
    mouseout: function(e) {
      e.target.setIcon(new L.Icon.Default());
      window.pubsub.publish('klub.unhovered');
    }
  }
);
