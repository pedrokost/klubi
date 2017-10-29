import Ember from "ember";

export default Ember.Service.extend({
  baseUrl: "https://maps.googleapis.com/maps/api/geocode/json?",
  apiKey: "AIzaSyBpN-jOLvDa0z6-nOaypIrgGLA465bmTSE",
  language: "sl",
  region: "si",
  address: null,

  url: Ember.computed("address", function() {
    const baseUrl = this.get("baseUrl");
    const apiKey = this.get("apiKey");
    const language = this.get("language");
    const region = this.get("region");
    const address = encodeURIComponent(this.get("address"));

    return `${baseUrl}language=${language}&api=${apiKey}&region=${region}&address=${address}`;
  }),

  geocode(address) {
    this.set("address", address);
    return Ember.$.getJSON(this.get("url"));
  }
});
