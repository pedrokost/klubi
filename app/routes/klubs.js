import Ember from 'ember';

export default Ember.Route.extend({
  title(tokens) {
    if (!!tokens.length) {
      return tokens.reverse().join(' - ');
    }
    return 'Športni Klubi';
  },
  queryParams: {
    category: {
      refreshModel: true
    }
  },
  beforeModel() {
    // To show the user a category change is in progress, remove the currently shown data, so I can display a spinner
    this.controllerFor('klubs').set('model', Ember.A());
  },
  model(params) {
    return this.store.query('klub', params);
  }
});
