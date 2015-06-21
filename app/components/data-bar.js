import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['data-bar'],
  classNameBindings: ['isShowPage:data-bar--occlude'],
  isShowPage: false,

  actions: {
    zoomToMarker: function(hoveredKlub) {
      this.sendAction('action', hoveredKlub);
    }
  }
});
