import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['klub-card'],
  click: function () {
    this.sendAction('action', this.get('klubId'))
  }
});
