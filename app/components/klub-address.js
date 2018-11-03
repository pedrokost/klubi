import { computed } from "@ember/object";
import Component from "@ember/component";

export default Component.extend({
  tagName: "li",
  classNames: ["klub-address", "klub_page-item"],
  classNameBindings: ["active"],
  title: "Prikaži na zemljevidu",
  attributeBindings: ["title"],

  click: function() {
    this.zoomToLocation(this.get("klubId"));
  },

  cleanAddress: computed("address", function() {
    var address = this.address;
    if (address === null || address === undefined) {
      return "";
    }
    return address.replace(", Slovenija", "");
  })
});
