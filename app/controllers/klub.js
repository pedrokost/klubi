import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application', 'klubs'],
  isHovered: false,

  currentRouteName: Ember.computed.alias('controllers.application.currentRouteName'),

  mapCenter: Ember.computed.alias('controllers.klubs.markerCenter'),
  mapZoom: Ember.computed.alias('controllers.klubs.zoom'),

  _panMapToMarker: function() {
    var center = this.get('latlng');
    this.set('mapCenter', center);
    this.set('mapZoom', 16);
  },

  panMapToMarker: function() {
    this._panMapToMarker();
  }.observes('model', 'latlng'),

  isActive: function() {
    // TODO: There must be a better way to do this, maybe getting it from the view as a property?

    if (this.get('currentRouteName') === 'klub.index') {

      // // FIXME: this code is always true
      // if (this.get('content.id') === this.get('id')) {
      //   return true;
      // }
    }
    return false;
  }.property('model.id', 'currentRouteName'),


  latlng: function() {
    return L.latLng(this.get('model.latitude'), this.get('model.longitude'));
  }.property('model', 'latitude', 'longitude'),

  location: Ember.computed.alias('latlng'),
});
