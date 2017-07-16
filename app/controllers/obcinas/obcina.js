import Ember from "ember";

export default Ember.Controller.extend({
  categories: Ember.inject.service(),

  allCategories: Ember.computed.alias("categories.list"),

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
  ),

  noKlubs: Ember.computed("filteredKlubs", function() {
    return this.get("filteredKlubs").length === 0;
  }),

  categorizedKlubs: Ember.computed(
    "filteredKlubs",
    "categories.list",
    function() {
      const klubs = this.get("filteredKlubs");

      const allCategories = this.get("categories.list");
      const PER_CATEGORY_LIMIT = 6;

      let isKlubFromCategoryFilter = (klub, category) => {
        // Return if it is a parent klub, or if its real parent does not belong to the current category.
        return (
          klub.get("categories") &&
          klub.get("categories").indexOf(category) !== -1
        );
      };

      return allCategories
        .map(category => {
          let categoryKlubs = klubs.filter(klub =>
            isKlubFromCategoryFilter(klub, category.identifier)
          );

          return {
            category: category,
            klubs: categoryKlubs.slice(0, PER_CATEGORY_LIMIT),
            hasMore: categoryKlubs.length > PER_CATEGORY_LIMIT
          };
        })
        .filter(group => group.klubs.length > 0);
    }
  )
});
