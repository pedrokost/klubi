import { computed } from "@ember/object";
import { alias } from "@ember/object/computed";
import { inject as service } from "@ember/service";
import Controller from "@ember/controller";

export default Controller.extend({
  category: null,
  categories: service(),

  allCategories: alias("categories.list"),

  categoryTitle: computed("category", function() {
    return this.get("categories").humanizeCategory(this.category);
  }),

  otherCategories: computed("categories.list", function() {
    let allCategories = this.get("categories.list");
    const currentCategory = this.get("category");

    return allCategories.filter(
      category => category.identifier !== currentCategory
    );
  }),

  filteredKlubs: computed(
    "model.klubs",
    "model.klubs.@each.parent",
    function() {
      let klubs = this.get("model.klubs");

      let isParentFilter = klub => {
        // Return if it is a parent klub, or if its real parent does not belong to the current category.
        return klub.get("parent.content") === null;
      };

      return klubs.filter(isParentFilter);
    }
  )
});
