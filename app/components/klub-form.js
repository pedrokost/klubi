import Ember from "ember";

export default Ember.Component.extend({
  classNames: "klub-form",
  store: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

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

  actions: {
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
