import $ from "jquery";
import { isBlank } from "@ember/utils";
import { on } from "@ember/object/evented";
import { computed, get } from "@ember/object";
import { A } from "@ember/array";
import { inject as service } from "@ember/service";
import Component from "@ember/component";

export default Component.extend({
  classNames: "klub-form",
  store: service(),
  flashMessages: service(),
  categories: service(),

  knownCategories: A([]),

  serialized: computed(
    "klub",
    "klub.branches",
    "klub.branches.@each.address",
    "klub.branches.@each.latitude",
    "klub.branches.@each.longitude",
    function() {
      return JSON.stringify(this.get("klub").serialize(), null, 2);
    }
  ),

  setup: on("init", function() {
    let categories = this.get("categories");
    this.set("knownCategories", categories.list.mapBy("identifier"));
  }),

  actions: {
    createCategoryOnDelimiter(select, e) {
      if (
        (e.key === "Enter" || e.key === ",") &&
        select.isOpen &&
        (!select.highlighted || e.key === ",") &&
        !isBlank(select.searchText)
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
      if (isBlank(editor)) {
        const flashMessages = get(this, "flashMessages");
        flashMessages.error(
          "Prosim, vnesi svojo e-pošto. Obvestili te bomo, ko bojo podatki obljavljeni."
        );
        $("html, body, .bodywrapper").animate({ scrollTop: 0 }, "slow");

        return;
      }

      if (this.get("formattedAddress")) {
        this.get("klub").set("address", this.get("formattedAddress"));
      }

      this.onSubmit();
    }
  }
});
