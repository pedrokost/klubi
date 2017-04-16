import Ember from "ember";

export default Ember.Controller.extend({
  geolocator: Ember.inject.service(),
  init() {
    this.get("geolocator").centerMapOnUser();
  }
});
