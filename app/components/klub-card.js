import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['klub-card'],
  mouseEnter: function() {
    // window.pubsub.publish('klub.hovered', this.get('klubId'));
    this.sendAction('action', true);
  },
  mouseLeave: function() {
    this.sendAction('action', false);
  }
  // mouseLeave: function(e) {
  //   window.pubsub.publish('klub.unhovered');
  // }
});
