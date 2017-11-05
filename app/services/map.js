/* globals L */
import { scheduleOnce } from '@ember/runloop';

import Service from '@ember/service';

var southWest = L.latLng(44.0, 12.0), // spodaj levo
  northEast = L.latLng(48, 18); // zgoraj desno

export default Service.extend({
  maxBounds: L.latLngBounds(southWest, northEast),
  map: null,

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
    // zooming, but position breaks)
    const map = this.get("map");
    if (!map) {
      return;
    }
    map.setView(location, zoomLevel);
  }
});
