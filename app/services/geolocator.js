import Ember from "ember";

export default Ember.Service.extend({
  control: null,

  centerMapOnUser: Ember.observer("control", function() {
    Ember.run.once(this, "_centerMapOnUser");
  }),

  _centerMapOnUser() {
    const control = this.get("control");
    if (!control) {
      return;
    }
    // request location update and set location
    control.start();
  }
});
