import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["klub_page js-close l-flex"],
  map: Ember.inject.service(),

  isUnverified: Ember.computed("klub.verified", function() {
    // === to avoid geting undefined and showing the warning while the
    // model is being loaded
    return this.get("klub.verified") === false;
  }),

  isPermanentlyClosed: Ember.computed("klub.closedAt", function() {
    return (
      this.get("klub.closedAt") !== null &&
      this.get("klub.closedAt") !== undefined
    );
  }),

  permalink: Ember.computed("categoryShown", "klub.id", function() {
    const ID_REGEX = /[-\/]\d+$/gmi;
    const idStart = this.get("klub.id").search(ID_REGEX);
    const category = this.get("categoryShown");

    if (idStart !== -1 && category) {
      let klubId = this.get("klub.id").substring(idStart + 1);
      return `https://www.klubi.si/${category}/${klubId}`;
    } else {
      return null;
    }
  }),

  _invalideMapSize: function() {
    this.get("map").invalidateSize();
  },

  _renderComments: function() {
    // Get FB to parse the DOM to insert comments only if they are
    // not yet present
    FB.XFBML.parse();
  },

  didRender() {
    Ember.run.debounce(this, this._invalideMapSize, 500);
    Ember.run.debounce(this, this._renderComments, 1500);
  },

  addresses: Ember.computed(
    "klub.address",
    "klub.id",
    "klub.branches",
    "klub.branches.@each.address",
    "klub.branches.@each.id",
    "selectedLocation",
    function() {
      const selectedLocation = this.get("selectedLocation.id");

      // FIXME: mixing design and logic!
      // If there are no branches, then do not color any address blue
      const branchesCount = this.get("klub.branches.length");

      return [
        {
          address: this.get("klub.address"),
          active: this.get("klub.id") === selectedLocation && branchesCount > 0,
          id: this.get("klub.id")
        }
      ].concat(
        this.get("klub.branches").map(function(branch) {
          return {
            address: branch.get("address"),
            active: branch.get("id") === selectedLocation,
            id: branch.get("id")
          };
        })
      );
    }
  ),

  click(evt) {
    // The purpose of whitelisting the close action is to enable selecting
    // the text on the page to copy it.
    if (evt.target.classList.contains("js-close")) {
      this.sendAction();
    }
  }
});
