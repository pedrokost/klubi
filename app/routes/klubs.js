import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    category: {
      refreshModel: true
    }
  },
  model: function(params) {
    return this.store.findQuery('klub', params);
  },
  actions: {
    goHome: function () {
      this.transitionTo('klubs');
    }
  }
});
