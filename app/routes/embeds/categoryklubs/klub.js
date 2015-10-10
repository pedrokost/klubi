import Ember from 'ember';
import KlubRoute from '../../klub';
import Prerenderable from 'zatresi/mixins/after-render-prerenderable';
import LeafletRefreshable from 'zatresi/mixins/refresh-leaflet';

export default KlubRoute.extend(Prerenderable, LeafletRefreshable, {
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
    goHome() {
      this.transitionTo('embeds.categoryklubs');
    }
  }
});
