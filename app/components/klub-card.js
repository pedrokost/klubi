import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['klub-card'],
  classNameBindings: ['isHovered:klub-card--hover'],
  isHovered: true,
  click: function () {
    this.sendAction('action', this.get('klubId'))
  },
  mouseEnter: function(e) {
    window.pubsub.publish('klub.hovered', this.get('klubId'));
  },
  mouseLeave: function(e) {
    window.pubsub.publish('klub.unhovered');
  }
});
