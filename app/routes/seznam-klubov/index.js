import Ember from "ember";

export default Ember.Route.extend({
  router: Ember.inject.service(),
  redirect() {
    this.get("router").transitionTo("seznam-klubov.klubs", "fitnes");
  }
});
