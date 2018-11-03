import Component from "@ember/component";

export default Component.extend({
  tagName: "header",
  classNames: ["logo-button"],
  category: null,

  actions: {
    toggleSideNav() {
      this.onClick();
    }
  }
});
