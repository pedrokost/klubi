import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Športni Klubi',
  queryParams: {
    category: {
      refreshModel: true
    }
  },
  beforeModel: function(){
    // To show the user a category change is in progress, remove the currently shown data, so I can display a spinner
    this.controllerFor('klubs').set('model', Ember.A());
  },
  model: function(params) {
    return this.store.query('klub', params);
  }
});
