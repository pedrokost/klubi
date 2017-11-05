import { debounce } from '@ember/runloop';
import { observer } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  required: null,
  placeholder: null,
  classNameBindings: ["geocodingInvalid"],
  geocoder: service(),
  geocodingInvalid: true,
  geocodingFailed: false,
  inputtedAddress: null,
  formattedAddress: null,
  address: null,
  initialized: false,

  didReceiveAttrs() {
    this._super(...arguments);
    if (
      !this.get("initialized") &&
      !this.get("inputtedAddress") &&
      this.get("address")
    ) {
      this.set("inputtedAddress", this.get("address"));
      this.updateMap();
      this.set("initialized", true);
    }
  },

  _setValidity(isValid) {
    const message = isValid ? "" : "Naslova nismo prepoznali.";
    this.$()
      .find("input")[0]
      .setCustomValidity(message);
  },

  updateMap() {
    var geocoder = this.get("geocoder");
    var address = this.get("inputtedAddress");
    var that = this;

    if (address) {
      geocoder.geocode(address).then(function({ status, results }) {
        // Because of the components used in geocoding, if no match is found
        // google returns "Slovenia" with the "OK" status.
        const okStatus =
          status === "OK" && results[0].formatted_address !== "Slovenija";

        that.set("geocodingInvalid", !okStatus);
        that.set("geocodingFailed", !okStatus);

        that._setValidity(okStatus);

        if (okStatus) {
          const latitude = results[0].geometry.location.lat;
          const longitude = results[0].geometry.location.lng;
          const formattedAddress = results[0].formatted_address;
          let town = results[0].address_components.find(component => {
            return component.types.includes("postal_town");
          });
          if (!town) {
            town = results[0].address_components.find(component => {
              return component.types.includes("administrative_area_level_1");
            });
          }

          town = town ? town.long_name : null;
          // if (!town) { debugger }

          that.set("formattedAddress", formattedAddress);

          that.attrs.updateAddress(formattedAddress, latitude, longitude, town);

          that.set("zoom", 14);
          that.set("mapLocation", [latitude, longitude]);
        }
      });
    }
  },

  listenForTypingPause: observer("inputtedAddress", function() {
    this.set("formattedAddress", "...");
    this.set("geocodingInvalid", true);
    this.set("geocodingFailed", false);
    debounce(this, this.updateMap, 250);
  })
});
