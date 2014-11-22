import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['klub_page'],

  click: function(){
    this.sendAction();
  }
});
