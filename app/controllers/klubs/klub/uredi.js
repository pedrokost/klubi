import $ from "jquery";
import { get } from "@ember/object";
import { inject as service } from "@ember/service";
import Controller from "@ember/controller";
import ENV from "../../../config/environment";
import rollbar from "rollbar";

export default Controller.extend({
  submitButtonDisabled: false,
  flashMessages: service(),
  router: service(),
  actions: {
    updateKlub() {
      const klub = this.get("model");
      const flashMessages = get(this, "flashMessages");
      this.set("submitButtonDisabled", true);
      const self = this;

      let newBranches = klub.get("branches").filterBy("isNew");
      let dirtyBranches = klub.get("branches").filterBy("isDirty");
      let deletedBranches = klub.get("branches").filterBy("isDeleted");

      klub
        .save()
        .then(function() {
          newBranches.invoke("deleteRecord");
          dirtyBranches.invoke("rollbackAttributes");
          deletedBranches.invoke("rollbackAttributes");
          klub.rollbackAttributes();

          klub.reload().then(function(klub) {
            self.set("submitButtonDisabled", false);
            flashMessages.success(
              "Hvala za popravke ;) Podatke bomo preverili in jih v kratkem prikazali na strani"
            );
            self
              .get("router")
              .transitionTo("klubs.klub.zahtevaj-priporocilo", klub.get("id"));
          });
        })
        .catch(function(err) {
          console.error(err);
          rollbar.error("Something went wrong when updating klub", err);
          self.set("submitButtonDisabled", false);
          $("html, body, .bodywrapper").animate({ scrollTop: 0 }, "slow");
          flashMessages.error(
            "Prišlo je do neznane napake pri shranjevanju podatkov o klubu :( Če ti ponovno ne uspe, me o tem prosim obesti na pedro@klubi.si."
          );
        });
    }
  }
});
