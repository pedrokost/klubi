import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import rollbar from "rollbar";

export default Controller.extend({
  router: service(),
  submitButtonDisabled: false,
  flashMessages: service(),
  actions: {
    openEditKlubPage(klub) {
      this.get("router").transitionTo("klubs.klub.uredi", klub.get("id"));
    },
    sendConfirmation() {
      const klub = this.get("model.klub");
      const requestHash = this.get("model.requestHash");
      const flashMessages = this.get("flashMessages");
      this.set("submitButtonDisabled", true);

      klub
        .confirmData({ request_hash: requestHash })
        .then(response => {
          flashMessages.success(
            "Hvala, da ste preverili podatke o klubu. Le kaj bi naredili brez vas!"
          );
          this.get("router").transitionTo("klubs.klub", klub.get("id"));
        })
        .catch(error => {
          flashMessages.error("Potrjevanje podatkov s to kodo ni več možno.");
          rollbar.error(
            `Failed confirming data for klub ${klub.get(
              "id"
            )} with hash ${requestHash}`,
            error
          );
          this.get("router").transitionTo("klubs.klub", klub.get("id"));
        });
    }
  }
});
