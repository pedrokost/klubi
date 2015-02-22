import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, klub) {
    this._super(controller, klub);
  }
});
