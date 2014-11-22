import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['index'],
  isHovered: function() {
    return this.get('controllers.index.hoveredKlub.model') == this.get('model')
  }.property('controllers.index.hoveredKlub'),
  latlng: function() {
    return L.latLng(this.get('latitude'), this.get('longitude'));
  }.property('latitude', 'longitude'),

  offCenterLatlng: function() {
    var offsetLatitude = 0;
    var offsetLongitude = 0.005;
    return L.latLng(this.get('latitude')+offsetLatitude, this.get('longitude')+offsetLongitude);
  }.property('latitude', 'longitude')
});
