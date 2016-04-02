import Ember from 'ember';

export default Ember.Controller.extend(Ember.GoogleAnalyticsTrackingMixin, {
  application: Ember.inject.controller('application'),
  queryParams: ['category'],
  category: 'fitnes',
  zoom: 8,
  markerCenter: [46.122636, 14.81546], // Slivna, Slovenia,
  currentRouteName: Ember.computed.alias('application.currentRouteName'),

  anyKlub: Ember.computed('model', function() {
    return this.get('model');
  }),

  isShowPage: Ember.computed('currentRouteName', function() {
    // TODO: this is brittle.
    return this.get('currentRouteName') === 'embeds.categoryklubs.klub.index';
  }),

  actions: {
    showKlub(klub) {
      // TODO: Will probably needs a simple one for these too
      this.transitionToRoute('embeds.categoryklubs.klub', klub);
    },
    zoomToMarker(klub) {
      this.set('zoom', 12);
      this.set('markerCenter', klub.get('location'));

      this.trackEvent('klub', 'zoom-to-marker', klub.get('id'), 1);
    },
    zoomToLocation(location, zoomLevel) {
      this.set('zoom', zoomLevel);
      this.set('markerCenter', location);
    },
    setHoveredKlub(klubId, toHovered) {
      let klub = this.get('model').find(klub => klub.get('id') === klubId);
      klub.set('isHovered', toHovered.hovered);
    }
  }
});
