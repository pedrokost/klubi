import { A } from "@ember/array";
import { computed } from "@ember/object";
import { alias } from "@ember/object/computed";
import { inject as service } from "@ember/service";
import Controller from "@ember/controller";
import Ember from "ember";
import ENV from "../config/environment";

export default Controller.extend(Ember.GoogleAnalyticsTrackingMixin, {
  map: service(),
  zoom: 8,
  markerCenter: [46.122636, 14.81546],
  category: "fitnes",
  maxBounds: alias("map.maxBounds"),
  flashMessages: service(),
  categories: service(),
  router: service(),

  isCategorySupported: computed("category", function() {
    return this.get("categories").isSupported(this.category);
  }),

  anyKlub: computed("filteredKlubs", function() {
    return this.filteredKlubs;
  }),

  filteredKlubs: computed("category", "model", function() {
    var category = this.category;

    if (!this.model) {
      return A();
    }

    return this.model.filter(function(klub) {
      return klub.get("categories").indexOf(category) >= 0;
    });
  }),

  actions: {
    showKlub(klub) {
      this.get("router").transitionTo("klubs.klub", klub.get("id"));
    },
    zoomToMarker(klub) {
      this.send("zoomToLocation", klub.get("location"), 12);
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
