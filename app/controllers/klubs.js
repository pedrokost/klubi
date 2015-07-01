import Ember from 'ember';

export default Ember.Controller.extend(Ember.GoogleAnalyticsTrackingMixin, {
  needs: ['application'],
  zoom: 8,
  markerCenter: L.latLng(46.122636,14.81546), // Slivna, Slovenia,
  currentRouteName: Ember.computed.alias('controllers.application.currentRouteName'),
  queryParams: ['category'],
  category: 'fitnes',
  offsetedMap: false, // whether to offset the map to make place for klub details

  anyKlub: Ember.computed('filteredKlubs', function() {
    return this.get('filteredKlubs');
  }),

  filteredKlubs: Ember.computed('category', 'model', function() {
    var category = this.get('category');

    return this.get('model').filter(function(item) {
      return item.get('categories').indexOf(category) >= 0;
    });
  }),

  isShowPage: Ember.computed('currentRouteName', function() {
    // TODO: this is brittle.
    return this.get('currentRouteName') === 'klub.index';
  }),

  actions: {
    showKlub: function (klub) {
      this.transitionToRoute('klub', klub);
    },
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
    zoomToLocation: function(location, zoomLevel) {
      this.set('zoom', zoomLevel);

      Ember.run.later(this, function() {
        this.set('markerCenter', location);
        Ember.run.later(this, function() {
          this.set('markerCenter', location);
        }, 200);
      }, 500);
    }

  }

});
