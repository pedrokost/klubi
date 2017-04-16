import Ember from "ember";

export default Ember.Service.extend({
  control: null,

  centerMapOnUser: Ember.observer("control", function() {
    Ember.run.once(this, "_centerMapOnUser");
  }),

  _isHTTPSPage() {
    var url = window.location != window.parent.location
      ? document.referrer
      : document.location.href;
    return url.indexOf("https://") !== -1 || url.indexOf("localhost") !== -1;
  },
  _centerMapOnUser() {
    if (!this._isHTTPSPage()) {
      console.log("You are not a HTTPS page. Cannot do geolocation here.");
      return;
    }

    const control = this.get("control");
    if (!control) {
      return;
    }
    // request location update and set location
    control.start();
  }
});
