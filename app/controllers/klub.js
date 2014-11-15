import Ember from 'ember';

export default Ember.ObjectController.extend({
  latlng: function() {
    return L.latLng(this.get('latitude'), this.get('longitude'));
  }.property('latitude', 'longitude')
});
