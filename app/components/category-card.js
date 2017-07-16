import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["card", "js-category-card"],

  title: Ember.computed("obcina.name", "category.name", function() {
    const obcinaName = this.get("obcina.name");
    const categoryName = this.get("category.name");

    return `${categoryName} v občini ${obcinaName}`;
  })
});
