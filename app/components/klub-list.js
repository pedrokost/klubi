import { A } from "@ember/array";
import $ from "jquery";
import { computed } from "@ember/object";
import Component from "@ember/component";
import Ember from "ember";

export default Component.extend(Ember.GoogleAnalyticsTrackingMixin, {
  tagName: "section",
  classNames: ["klub-list"],
  query: "",
  height: null,

  klubCardSizes: computed("filteredKlubs", function() {
    const klubs = this.filteredKlubs;

    const width = $(".klub-list-collection").width() - 20;
    const MARGIN_BOTTOM = 5;
    const DEFAULT_HEIGHT = 62 + MARGIN_BOTTOM;
    const BRANCH_HEIGHT = 38;
    const PARENT_HEIGHT = 35;

    return klubs.map(function(klub) {
      const branchesCount = klub.get("branches.length");
      const height =
        branchesCount == 0
          ? DEFAULT_HEIGHT
          : PARENT_HEIGHT + (branchesCount + 1) * BRANCH_HEIGHT;
      return { width: width, height: height };
    });
  }),

  didInsertElement() {
    var height = this.get("height");

    if (height === null) {
      // Set the height of the list to fill the remaining of the page
      const docHeight = $(document).height();
      const listTopOffset = this.$(".klub-list-collection").offset().top;

      this.$(".klub-list-collection").css({
        height: docHeight - listTopOffset
      });
    }
  },

  filteredKlubs: computed(
    "klubs",
    "klubs.@each.parent",
    "klubs.@each.name",
    "query",
    function() {
      let isParentFilter = klub => {
        var klubs = this.klubs;

        // Return if it is a parent klub, or if its real parent does not belong to the current category.
        return (
          klub.get("parent.content") === null ||
          klubs.mapBy("id").indexOf(klub.get("parent.id")) === -1
        );
      };

      let searchFilter = (klub, query) => {
        // TODO: Should also search in all the children and parents
        return (
          klub
            .get("name")
            .toLowerCase()
            .indexOf(query) >= 0 ||
          (klub.get("town") &&
            klub
              .get("town")
              .toLowerCase()
              .indexOf(query) >= 0)
        );
      };

      let fullSearchFilter = (klub, query) => {
        // Returns true if the klub, any of its parents, or any of its children contains the search query
        let family = A([klub]);
        if (klub.get("parent.content")) {
          family.pushObject(klub.get("parent.content"));
        }
        if (klub.get("branches.length")) {
          klub.get("branches").forEach(function(b) {
            family.pushObject(b);
          });
        }
        return (
          family.find(function(klub) {
            return searchFilter(klub, query);
          }) !== undefined
        );
      };

      let parentsSearchFilter = (klub, query) => {
        return isParentFilter(klub) && fullSearchFilter(klub, query);
      };

      let klubs = this.get("klubs");
      let query = this.get("query").toLowerCase();
      let filter = query ? parentsSearchFilter : isParentFilter;

      return klubs.filter(klub => {
        return filter(klub, query);
      });
    }
  )
});
