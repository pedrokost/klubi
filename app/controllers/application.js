import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'klub',
  zoom: 8,
  center: L.latLng(46.122636,14.81546), // Slivna, Slovenia,
  isShowPage: function() {
    console.log(this.get('currentPath'), this.get('currentPath') === 'klub')
    return this.get('currentPath') === 'klub';
  }.property('currentPath')
});
