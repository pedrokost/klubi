import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  queryParams: ['category'],
  category: 'fitnes',

  currentRouteName: Ember.computed.alias('controllers.application.currentRouteName'),

  zoom: 8,
  markerCenter: L.latLng(46.122636,14.81546), // Slivna, Slovenia,

  anyKlub: Ember.computed('model', function() {
    return this.get('model');
  }),

  isShowPage: Ember.computed('currentRouteName', function() {
    // TODO: this is brittle.
    return this.get('currentRouteName') === 'klub.index';
  }),

  showKlub: function (klub) {
    // TODO: Will probably needs a simple one for these too
    this.transitionToRoute('klub', klub);
  },

  actions: {
    zoomToMarker: function(klub) {
      this.set('zoom', 12);

      Ember.run.later(this, function() {
        this.set('markerCenter', klub.get('location'));
        Ember.run.later(this, function() {
          this.set('markerCenter', klub.get('location'));
        }, 200);
      }, 500);

      this.trackEvent('klub', 'zoom-to-marker', klub.get('id'), 1);
    },
  }
});
