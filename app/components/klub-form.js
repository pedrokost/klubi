import Ember from "ember";

export default Ember.Component.extend({
  classNames: "klub-form",
  store: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  categories: Ember.inject.service(),

  knownCategories: Ember.A([]),

  serialized: Ember.computed(
    "klub",
    "klub.branches",
    "klub.branches.@each.address",
    "klub.branches.@each.latitude",
    "klub.branches.@each.longitude",
    function() {
      return JSON.stringify(this.get("klub").serialize(), null, 2);
    }
  ),

  setup: Ember.on("init", function() {
    let categories = this.get("categories");
    this.set("knownCategories", categories.list.mapBy("identifier"));
  }),

  actions: {
    createCategoryOnDelimiter(select, e) {
      if (
        (e.key === "Enter" || e.key === ",") &&
        select.isOpen &&
        (!select.highlighted || e.key === ",") &&
        !Ember.isBlank(select.searchText)
      ) {
        let selected = this.get("klub.categories") || [];
        if (!selected.includes(select.searchText)) {
          this.get("knownCategories").pushObject(select.searchText);
          select.actions.choose(select.searchText);
        }
        return false;
      }
    },
    setAddressAttrs(klub, address, latitude, longitude, town) {
      klub.setProperties({ address, latitude, longitude, town });
    },
    addBranch(event) {
      this.get("store").createRecord("klub", {
        parent: this.get("klub")
      });
    },
    removeBranch(branch) {
      branch.deleteRecord();
    },
    save() {
      let editor = this.get("klub.editor");
      if (Ember.isBlank(editor)) {
        const flashMessages = Ember.get(this, "flashMessages");
        flashMessages.error(
          "Prosim, vnesi svojo e-pošto. Obvestili te bomo, ko bojo podatki obljavljeni."
        );
        Ember.$("html, body, .bodywrapper").animate({ scrollTop: 0 }, "slow");

        return;
      }

      if (this.get("formattedAddress")) {
        this.get("klub").set("address", this.get("formattedAddress"));
      }
      this.sendAction("submit");
    }
  }
});
