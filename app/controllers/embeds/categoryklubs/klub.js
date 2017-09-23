import Ember from "ember";

export default Ember.Controller.extend({
  "embeds/categoryklubs": Ember.inject.controller(),
  categoryShown: Ember.computed.alias("embeds/categoryklubs.category"),
  router: Ember.inject.service(),

  actions: {
    zoomToKlub(klubId) {
      this.get("router").transitionTo("embeds.categoryklubs.klub", klubId);
    }
  }
});
