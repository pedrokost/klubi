import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(model) {
    return model.get('name');
  },
  model: function(params) {
    return this.store.find('klub', params.klub_id);
  },
  setupController: function(controller, model) {
    // When navigating directly to a klub's page that is
    // not included in the default category, the model
    // is unloaded instantly. This fixes this.
    this._super(controller, model);

    var currentCategory = this.controllerFor('klubs').get('category');

    /*
    HACK: For some reason, model is sometime a model, sometimes an object
    that wrapps the model.
    */
    if (model.get('model')) {
      model = model.get('model');
    };

    if (model.get('categories').indexOf(currentCategory) === -1) {
      this.controllerFor('klubs').set('category', model.get('categories')[0]);
    }

  }
});
