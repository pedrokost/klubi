import Ember from "ember";
import ENV from "../../../config/environment";
import rollbar from "rollbar";

export default Ember.Controller.extend({
  submitButtonDisabled: false,
  flashMessages: Ember.inject.service(),
  router: Ember.inject.service(),
  actions: {
    updateKlub() {
      const klub = this.get("model");
      const flashMessages = Ember.get(this, "flashMessages");
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
            self.get("router").transitionTo("klubs.klub", klub.get("id"));
          });
        })
        .catch(function(err) {
          console.error(err);
          rollbar.error("Something went wrong when updating klub", err);
          self.set("submitButtonDisabled", false);
          Ember.$("html, body, .bodywrapper").animate({ scrollTop: 0 }, "slow");
          flashMessages.error(
            "Prišlo je do neznane napake pri shranjevanju podatkov o klubu :( Če ti ponovno ne uspe, me o tem prosim obesti na pedro@klubi.si."
          );
        });
    }
  }
});
