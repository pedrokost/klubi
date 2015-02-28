import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('klub', params.klub_id);
  },
  setupController: function(controller, model) {
    // When navigating directly to a klub's page that is
    // not included in the default category, the model
    // is unloaded instantly. This fixes this.
    this._super(controller, model);

    var currentCategory = this.controllerFor('klubs').get('category');

    if (model.get('categories').indexOf(currentCategory) === -1) {
      this.controllerFor('klubs').set('category', model.get('categories')[0]);
    }

  }
});
