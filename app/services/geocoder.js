import $ from "jquery";
import { computed } from "@ember/object";
import Service from "@ember/service";

export default Service.extend({
  baseUrl: "https://maps.googleapis.com/maps/api/geocode/json?",
  apiKey: "AIzaSyBpN-jOLvDa0z6-nOaypIrgGLA465bmTSE",
  language: "sl",
  region: "si",
  address: null,

  url: computed("address", function() {
    const baseUrl = this.get("baseUrl");
    const apiKey = this.get("apiKey");
    const language = this.get("language");
    const region = this.get("region");
    const address = encodeURIComponent(this.address);

    return `${baseUrl}language=${language}&key=${apiKey}&region=${region}&address=${address}`;
  }),

  geocode(address) {
    this.set("address", address);
    return $.getJSON(this.get("url"));
  }
});
