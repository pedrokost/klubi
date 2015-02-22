import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    category: {
      refreshModel: true
    }
  },
  beforeModel: function(){
    // To show the user a category change is in progress, remove the currently shown data, so I can display a spinner
    this.controllerFor('klubs').set('model', null);
  },
  model: function(params) {
    return this.store.findQuery('klub', params);
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('offsetedMap', false);
  },
  actions: {
    goHome: function () {
      this.transitionTo('klubs');
      this.get('controller').set('offsetedMap', false);
    }
  }
});
