import Ember from 'ember';

export default Ember.ArrayController.extend(Ember.GoogleAnalyticsTrackingMixin, {
  needs: ['application'],
  itemController: 'klub',
  zoom: 8,
  markerCenter: L.latLng(46.122636,14.81546), // Slivna, Slovenia,
  currentRouteName: Ember.computed.alias('controllers.application.currentRouteName'),
  queryParams: ['category'],
  category: 'fitnes',
  offsetedMap: false, // whether to offset the map to make place for klub details

  anyKlub: function() {
    return this.get('model');
  }.property('model'),

  filteredKlubs: function() {
    var category = this.get('category');

    return this.filter(function(item) {
      return item.get('categories').indexOf(category) >= 0;
    });

  }.property('category', 'model'),


  isShowPage: function() {
    // TODO: this is brittle.
    return this.get('currentRouteName') === 'klub.index';
  }.property('currentRouteName'),

  actions: {
    showKlub: function (klubId) {
      this.transitionToRoute('klub', klubId);
    },
    zoomToMarker: function(klub) {
      this.set('zoom', 12);

      Ember.run.later(function() {
        this.set('markerCenter', klub.get('location'));
      }.bind(this), 500);

      this.trackEvent('klub', 'zoom-to-marker', klub.get('id'), 1);

    }
  }

});
