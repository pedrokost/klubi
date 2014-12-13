import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('klub');
  },
  actions: {
    goHome: function () {
      this.transitionTo('index');
    }
  }
});
