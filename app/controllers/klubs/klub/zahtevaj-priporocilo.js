import Controller from "@ember/controller";
import { gt } from "@ember/object/computed";
import { inject as service } from "@ember/service";

if (window.rollbar === undefined) {
  window.rollbar = {
    error: () => {
      console.error(arguments);
    }
  };
}

export default Controller.extend({
  requesterName: null,
  requesterEmail: null,
  submitButtonDisabled: false,
  flashMessages: service(),
  router: service(),

  multipleRecommenders: gt("model.length", 1),

  actions: {
    addRecommender() {
      let klub = this.get("model.firstObject.klub");
      this.get("model").pushObject(
        this.get("store").createRecord("commentRequest", {
          klub: klub
        })
      );
    },
    removeRecommender(recommender) {
      recommender.deleteRecord();
      this.get("model").removeObject(recommender);
    },
    sendRequest() {
      const flashMessages = get(this, "flashMessages");
      const klub = this.get("model.firstObject.klub");
      this.set("submitButtonDisabled", true);

      const self = this;
      this.get("model").forEach(function(commentRequest) {
        commentRequest.set("requesterName", self.get("requesterName"));
        commentRequest.set("requesterEmail", self.get("requesterEmail"));
      });

      let promises = [];

      this.get("model").forEach(function(commentRequest) {
        if (!commentRequest.get("isDeleted")) {
          promises.push(commentRequest.save());
        }
      });

      Promise.all(promises)
        .then(function() {
          self.set("submitButtonDisabled", false);

          self
            .get("router")
            .transitionTo(
              "klubs.klub",
              klub.get("categories.firstObject").toLowerCase(),
              klub.get("id")
            );
          flashMessages.success(
            "Odlično! Uspešno si poslal/a zahetvke za priporočilo!"
          );
        })
        .catch(function(err) {
          rollbar.error(
            "Something went wrong when sending comment request",
            err,
            promises
          );
          self.set("submitButtonDisabled", false);
          flashMessages.error(
            "Prišlo je do neznane napake pri pošiljanju zahtevka :( Če ti ponovno ne uspe, me o tem obesti na pedro@klubi.si. Hvala!"
          );
        });
    }
  }
});
