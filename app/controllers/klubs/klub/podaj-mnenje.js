import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

if (window.rollbar === undefined) {
  window.rollbar = {
    error: () => {
      console.error(arguments);
    }
  };
}

export default Controller.extend({
  submitButtonDisabled: false,
  flashMessages: service(),
  router: service(),
  actions: {
    saveComment() {
      const comment = this.get("model");
      const klub = comment.get("klub");

      // HACK: don't send klub data to server
      // comment.set("klub", null);

      const flashMessages = get(this, "flashMessages");
      this.set("submitButtonDisabled", true);
      const self = this;

      // TODO: add validations

      comment
        .save()
        .then(function(comment) {
          self.set("submitButtonDisabled", false);

          self
            .get("router")
            .transitionTo(
              "klubs.klub",
              klub.get("categories.firstObject").toLowerCase(),
              klub.get("id")
            );
          flashMessages.success(
            "Fantansticno! Tvoj komentar je sedaj objavljen!"
          );
        })
        .catch(function(err) {
          rollbar.error(
            "Something went wrong when saving comment",
            err,
            comment
          );
          self.set("submitButtonDisabled", false);
          flashMessages.error(
            "Prišlo je do neznane napake pri shranjevanju komentarja :( Če ti ponovno ne uspe, me o tem obesti na pedro@klubi.si. Hvala!"
          );
        });
    }
  }
});
