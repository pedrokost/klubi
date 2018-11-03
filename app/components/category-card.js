import { computed } from "@ember/object";
import Component from "@ember/component";

export default Component.extend({
  classNames: ["card", "js-category-card"],

  title: computed("obcina.name", "category.name", function() {
    return `${this.category.name} v občini ${this.obcina.name}`;
  })
});
