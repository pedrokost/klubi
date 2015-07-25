import Ember from 'ember';

export default Ember.Controller.extend(Ember.GoogleAnalyticsTrackingMixin, {
  needs: ['application'],
  queryParams: ['category'],
  category: 'fitnes',
  zoom: 8,
  markerCenter: L.latLng(46.122636,14.81546), // Slivna, Slovenia,
  currentRouteName: Ember.computed.alias('controllers.application.currentRouteName'),


  anyKlub: Ember.computed('model', function() {
    return this.get('model');
  }),

  isShowPage: Ember.computed('currentRouteName', function() {
    // TODO: this is brittle.
    return this.get('currentRouteName') === 'klub.index';
  }),

  actions: {
    showKlub: function (klub) {
      // TODO: Will probably needs a simple one for these too
      this.transitionToRoute('klub', klub);
    },
    zoomToMarker: function(klub) {
      this.set('zoom', 12);
      this.set('markerCenter', klub.get('location'));

      this.trackEvent('klub', 'zoom-to-marker', klub.get('id'), 1);
    },
  }
});
