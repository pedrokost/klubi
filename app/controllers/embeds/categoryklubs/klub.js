import { inject as service } from "@ember/service";
import { alias } from "@ember/object/computed";
import Controller, { inject as controller } from "@ember/controller";

export default Controller.extend({
  "embeds/categoryklubs": controller(),
  categoryShown: alias("embeds/categoryklubs.category"),
  router: service(),

  actions: {
    zoomToKlub(klubId) {
      this.get("router").transitionTo("embeds.categoryklubs.klub", klubId);
    },
    goHomeToEmbedsKlubs() {
      this.send("goHomeToEmbedsKlubsRouteAction");
    }
  }
});
