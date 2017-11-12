/* globals L */
import { scheduleOnce } from "@ember/runloop";
import RSVP from "rsvp";

import Service from "@ember/service";

var southWest = L.latLng(44.0, 12.0), // spodaj levo
  northEast = L.latLng(48, 18); // zgoraj desno

export default Service.extend({
  maxBounds: L.latLngBounds(southWest, northEast),
  map: null,
  _mapSearchPromise: null,

  invalidateSize: function() {
    // Call this method when the .leaflet-container
    // is resized
    const map = this.get("map");
    if (map) {
      scheduleOnce("afterRender", this, function() {
        map.invalidateSize();
      });
    }
  },

  zoomOut() {
    this.zoomToLocation([46.122636, 14.81546], 8);
  },

  zoomToLocation(location, zoomLevel) {
    // HACK: Call setView directly, as ember leaflet tries
    // setting the location and zoom separately, which does
    // not work consistently well (usually just does the
    // zooming, but position breaks). I need to disable animation
    // here as they tend to cause errors; I don't need animation on boot
    // anyway

    this.getMap().then(function(map) {
      map.setView(location, zoomLevel, { animate: false });
    });
  },

  getMap: function() {
    if (this.get("_mapSearchPromise")) {
      return this.get("_mapSearchPromise");
    } else {
      return this._getMap();
    }
  },

  _getMap: function() {
    let that = this;

    function waitForMap(resolve, reject, remainingAttempts) {
      if (remainingAttempts <= 0) {
        reject();
      } else if (that.get("map._mapPane")) {
        resolve(that.get("map"));
      } else {
        setTimeout(function() {
          waitForMap(resolve, reject, remainingAttempts - 1);
        }, 250);
      }
    }

    let getMapPromise = new RSVP.Promise(function(resolve, reject) {
      waitForMap(resolve, reject, 50);
    }).finally(function() {
      that.set("_mapSearchPromise", null);
    });

    this.set("_mapSearchPromise", getMapPromise);
    return getMapPromise;
  }
});
