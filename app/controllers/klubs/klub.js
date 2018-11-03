import { inject as service } from "@ember/service";
import { alias } from "@ember/object/computed";
import Controller, { inject as controller } from "@ember/controller";

export default Controller.extend({
  klubs: controller(),
  categoryShown: alias("klubs.category"),
  router: service(),

  actions: {
    zoomToKlub(klubId) {
      this.get("router").transitionTo("klubs.klub", klubId);
    },
    goHome() {
      this.send("goHomeRouteAction");
    }
  }
});
