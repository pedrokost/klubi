import Ember from "ember";

export default Ember.Controller.extend({
  category: null,
  categories: Ember.inject.service(),

  allCategories: Ember.computed.alias("categories.list"),

  categoryTitle: Ember.computed("category", function() {
    return this.get("categories").humanizeCategory(this.get("category"));
  }),

  otherCategories: Ember.computed("categories.list", function() {
    let allCategories = this.get("categories.list");
    const currentCategory = this.get("category");

    return allCategories.filter(
      category => category.identifier !== currentCategory
    );
  }),

  filteredKlubs: Ember.computed(
    "model.klubs",
    "model.klubs.@each.parent",
    function() {
      var klubs = this.get("model.klubs");

      let isParentFilter = klub => {
        // Return if it is a parent klub, or if its real parent does not belong to the current category.
        return klub.get("parent.content") === null;
      };

      return klubs.filter(isParentFilter);
    }
  )
});
