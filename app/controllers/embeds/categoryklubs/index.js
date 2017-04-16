import Ember from "ember";

export default Ember.Controller.extend({
  geolocator: Ember.inject.service(),
  init() {
    console.log("initing");
    this.get("geolocator").centerMapOnUser();
  }
});
