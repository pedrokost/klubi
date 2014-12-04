import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application', 'klub'],
  isHovered: false,

  isActive: function() {
    // TODO: There must be a better way to do this, maybe getting it from the view as a property?
    if (this.get('controllers.application.currentRouteName') === 'klub') {
      if (this.get('controllers.klub.id') === this.get('id')) {
        return true;
      }
    }
    return false;
  }.property('controllers.klub.id', 'controllers.application.currentRouteName'),


  latlng: function() {
    return L.latLng(this.get('latitude'), this.get('longitude'));
  }.property('latitude', 'longitude'),

  location: function(){
    return this.get('latlng');
  }.property('latlng'),

  offCenterLatlng: function() {
    var offsetLatitude = 0;
    var offsetLongitude = 0.005;
    return L.latLng(this.get('latitude')+offsetLatitude, this.get('longitude')+offsetLongitude);
  }.property('latitude', 'longitude')
});
