import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return Ember.A([
      this.get("store").createRecord("commentRequest", {
        klub: this.modelFor("klubs.klub"),
        commenterName: "ABC",
        commenterEmail: "abc@test.com"
      })
    ]);
  }
});
