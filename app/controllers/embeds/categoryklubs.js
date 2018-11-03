import { computed } from "@ember/object";
import { alias } from "@ember/object/computed";
import { inject as service } from "@ember/service";
import Controller, { inject as controller } from "@ember/controller";
import Ember from "ember";

export default Controller.extend(Ember.GoogleAnalyticsTrackingMixin, {
  application: controller("application"),
  map: service(),
  queryParams: ["category"],
  category: "fitnes",
  zoom: 8,
  markerCenter: [46.122636, 14.81546], // Slivna, Slovenia
  maxBounds: alias("map.maxBounds"),
  router: service(),
  currentRouteName: alias("router.currentRouteName"),

  anyKlub: computed("model", function() {
    return this.model;
  }),

  isShowPage: computed("currentRouteName", function() {
    // TODO: this is brittle.
    return this.currentRouteName === "embeds.categoryklubs.klub.index";
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
