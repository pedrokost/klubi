import Ember from 'ember';
import Prerenderable from 'zatresi/mixins/after-render-prerenderable';
import LeafletRefreshable from 'zatresi/mixins/refresh-leaflet';


export default Ember.Route.extend(Prerenderable, LeafletRefreshable, {
  WANTED_ZOOM_LEVEL: 16,
  titleToken(model) {
    return model.get('name');
  },
  headTags: function() {
    let assetsResolve = this.assets.resolve;
    var klub = this.modelFor(this.routeName);
    var category = this.controllerFor('klubs').get('category');
    return [{
      type: 'meta',
      tagId: 'meta-description',
      attrs: {
        name: 'description',
        content: `${klub.get('name')} je ${category} klub v mestu ${klub.get('town')}. Najdi najboljši ${category} klub v svoji bližini.`
      }
    }, {
      type: 'link',
      tagId: 'link-canonical',
      attrs: {
        rel: 'canonical',
        content: `http://www.zatresi.si/${klub.get('id')}`
      }
    }, {
      type: 'meta',
      tagId: 'meta-og-url',
      attrs: {
        property: 'og:url',
        content: `http://www.zatresi.si/${klub.get('id')}`
      }
    }, {
      type: 'meta',
      tagId: 'meta-og-title',
      attrs: {
        property: 'og:title',
        content: `${klub.get('name')}`
      }
    }, {
      type: 'meta',
      tagId: 'meta-og-image',
      attrs: {
        property: 'og:image',
        content: assetsResolve(`assets/social/fb-${category}.png`, true)
      }
    }];
  },
  model(params) {
    return this.store.findRecord('klub', params.klub_id);
  },
  setupController(controller, model) {
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
  },
  actions: {
    goHome() {
      console.log('going to klubs index')
      this.transitionTo('klubs.index');
    }
  }
});
