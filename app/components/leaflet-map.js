// import Ember from 'ember'

import EmberLeafletComponent from "ember-leaflet/components/leaflet-map";

export default EmberLeafletComponent.extend({
  didCreateLayer() {
    this._super(...arguments);
    let that = this;

    var zoomOptions = {
      position: "bottomleft",
      zoomInTitle: "Približaj",
      zoomOutTitle: "Oddalji"
    };
    var geolocateOptions = {
      position: "bottomleft",
      icon: "fa fa-location-arrow",
      strings: {
        title: "Pokaži mojo lokacijo", // title of the locate control
        metersUnit: "metrov", // string for metric units
        popup: "Vi ste tukaj (na {distance} {unit} natančno)", // text to appear if user clicks on circle
        outsideMapBoundsMsg: "Ste zunaj meja zemljevida" // default message for onLocationOutsideMapBounds
      },
      locateOptions: {
        enableHighAccuracy: true,
        maxZoom: 14
      },
      onLocationError: function(err) {
        const flashMessages = that.get("flashMessages");
        flashMessages.error(err.message);
      }
    };

    if (this.get("klubiZoomControl")) {
      this.L.control.zoom(zoomOptions).addTo(this._layer);
      this.L.control.locate(geolocateOptions).addTo(this._layer);
    }
  }
});
