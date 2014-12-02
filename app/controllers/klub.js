import HighlightedIcon from '../layers/highlighted-icon';
import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['index'],
  isHovered: false,
  latlng: function() {
    return L.latLng(this.get('latitude'), this.get('longitude'));
  }.property('latitude', 'longitude'),

  location: function(){
    return this.get('latlng');
  }.property('latlng'),

  // icon : function(){
  //   //define here the logic for your icon
  //   //return a [Leaflet icon](http://leafletjs.com/reference.html#icon)
  //   // console.log('will change icon');
  //   if (this.get('isHovered')) {
  //     return new HighlightedIcon();
  //   } else{
  //     return new L.Icon.Default();
  //   }
  // }.property('isHovered'),

  offCenterLatlng: function() {
    var offsetLatitude = 0;
    var offsetLongitude = 0.005;
    return L.latLng(this.get('latitude')+offsetLatitude, this.get('longitude')+offsetLongitude);
  }.property('latitude', 'longitude'),
  actions: {
    hover: function(onOff) {
      // console.log('changing isHovered from', this.get('isHovered'), 'to', onOff);
      this.set('isHovered', onOff);
    }
  }
});
