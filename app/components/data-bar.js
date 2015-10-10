import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['data-bar'],

  actions: {
    zoomToMarker(hoveredKlub) {
      this.sendAction('action', hoveredKlub);
    },
    setHoveredKlub(klubId, toHovered) {
      this.sendAction('setHoveredKlub', klubId, toHovered);
    }
  }
});
