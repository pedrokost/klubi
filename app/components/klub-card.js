import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['klub-card'],
  mouseEnter: function(e) {
    window.pubsub.publish('klub.hovered', this.get('klubId'));
  },
  mouseLeave: function(e) {
    window.pubsub.publish('klub.unhovered');
  }
});
