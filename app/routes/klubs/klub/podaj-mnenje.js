import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return this.get("store").createRecord("comment", {
      // body: "komentar",
      // commenterName: "John",
      klub: this.modelFor("klubs.klub"),
      requestHash: params.request_hash
    });
  }
});
