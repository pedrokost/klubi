import Ember from 'ember';
import KlubRoute from 'zatresi/routes/klubs/klub';
import Prerenderable from 'zatresi/mixins/after-render-prerenderable';

export default KlubRoute.extend(Prerenderable, {
  WANTED_ZOOM_LEVEL: 16,
  setupController(controller, model) {
    // When navigating directly to a klub's page that is
    // not included in the default category, the model
    // is unloaded instantly. This fixes this.
    this._super(controller, model);

    let categoryKlubsController = this.controllerFor('embeds.categoryklubs');

    // Ask the controller to ask parent to set the map position correct
    categoryKlubsController.send('zoomToLocation', model.get('location'), this.WANTED_ZOOM_LEVEL);
  },
  actions: {
    goHomeToEmbedsKlubs() {
      console.log('going to categoryklubs index')
      this.transitionTo('embeds.categoryklubs.index');
    }
  },
  headTags() {
    let assetsResolve = this.assets.resolve;
    var klub = this.modelFor(this.routeName);
    var category = this.controllerFor('embeds.categoryklubs').get('category');
    return [{
      type: 'meta',
      tagId: 'meta-description',
      attrs: {
        name: 'description',
        content: `${klub.get('name')} je ${category} klub v mestu ${klub.get('town')}. Najdi najboljši ${category} klub v svoji bližini.`
      }
    }, {
      type: 'meta',
      tagId: 'meta-og-description',
      attrs: {
        property: 'og:description',
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
      tagId: 'meta-og-type',
      attrs: {
        property: 'og:type',
        content: 'website'
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
  }
});
