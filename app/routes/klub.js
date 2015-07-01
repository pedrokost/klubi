import Ember from 'ember';

export default Ember.Route.extend({
  WANTED_ZOOM_LEVEL: 16,
  titleToken: function(model) {
    return model.get('name');
  },
  model: function(params) {
    return this.store.findRecord('klub', params.klub_id);
  },
  setupController: function(controller, model) {
    // When navigating directly to a klub's page that is
    // not included in the default category, the model
    // is unloaded instantly. This fixes this.
    this._super(controller, model);

    var currentCategory = this.controllerFor('klubs').get('category');


    // HACK: For some reason, model is sometime a model, sometimes an object
    // that wrapps the model.

    if (model.get('model')) {
      model = model.get('model');
    };

    let klubsController = this.controllerFor('klubs');
    if (model.get('categories').indexOf(currentCategory) === -1) {
      klubsController.set('category', model.get('categories')[0]);
    }

    // Ask the controller to ask parent to set the map position correct
    klubsController.send('zoomToLocation', model.get('location'), this.WANTED_ZOOM_LEVEL);
  }
});
