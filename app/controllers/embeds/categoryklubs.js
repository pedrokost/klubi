import Ember from "ember";

export default Ember.Controller.extend(Ember.GoogleAnalyticsTrackingMixin, {
  application: Ember.inject.controller("application"),
  map: Ember.inject.service(),
  queryParams: ["category"],
  category: "fitnes",
  zoom: 8,
  markerCenter: [46.122636, 14.81546], // Slivna, Slovenia
  maxBounds: Ember.computed.alias("map.maxBounds"),
  router: Ember.inject.service(),
  currentRouteName: Ember.computed.alias("router.currentRouteName"),

  anyKlub: Ember.computed("model", function() {
    return this.get("model");
  }),

  isShowPage: Ember.computed("currentRouteName", function() {
    // TODO: this is brittle.
    return this.get("currentRouteName") === "embeds.categoryklubs.klub.index";
  }),

  actions: {
    showKlub(klub) {
      // TODO: Will probably needs a simple one for these too
      this.get("router").transitionTo(
        "embeds.categoryklubs.klub",
        klub.get("id")
      );
    },
    zoomToMarker(klub) {
      this.set("zoom", 12);
      this.set("markerCenter", klub.get("location"));

      this.trackEvent("klub", "zoom-to-marker", klub.get("id"), 1);
    },
    zoomToLocation(location, zoomLevel) {
      this.get("map").zoomToLocation(location, zoomLevel);
    },
    setHoveredKlub(klubId, toHovered) {
      let klub = this.get("model").find(klub => klub.get("id") === klubId);
      klub.set("isHovered", toHovered.hovered);
    }
  }
});
