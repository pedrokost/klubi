import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model(params) {
    // TODO: replace with something like this:
    // return RSVP.hash({
    //   songs: this.get('store').findAll('song'),
    //   albums: this.get('store').findAll('album')
    // });
    // Then delete the klub-data-confirmation model
    // return this.get("store").createRecord("klub-data-confirmation", {
    //   klub: this.modelFor("klubs.klub"),
    //   requestHash: params.request_hash
    // });
    return new RSVP.hash({
      klub: this.modelFor("klubs.klub"),
      requestHash: params.request_hash
    });
  }
});
