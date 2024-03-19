import $ from "jquery";
import { computed } from "@ember/object";
import Service from "@ember/service";
import { Loader } from "@googlemaps/js-api-loader";

export default Service.extend({
  language: "sl",
  region: "si",
  _geocoder: null,

  _loadGeocoder() {
    const loader = new Loader({
      apiKey: "AIzaSyBpN-jOLvDa0z6-nOaypIrgGLA465bmTSE",
      version: "weekly",
      libraries: ["geocoding"],
    });

    loader
      .importLibrary("geocoding")
      .then(({ Geocoder }) => {
        this.set("_geocoder", new Geocoder());
      })
      .catch((error) => {
        console.error("Error loading Geocoder:", error);
      });
  },

  geocode(address) {
    return new Promise((resolve, reject) => {
      if (!this.get("_geocoder")) {
        this._loadGeocoder()
          .then(() => {
            this._doGeocode(address, resolve, reject);
          })
          .catch(reject);
      } else {
        this._doGeocode(address, resolve, reject);
      }
    });
  },

  _doGeocode(address, resolve, reject) {
    this.get("_geocoder")
      .geocode({
        address,
        language: this.language,
        region: this.region,
      })
      .then((results) => {
        resolve(results);
      })
      .catch(reject);
  },
});
