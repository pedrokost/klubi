import Ember from "ember";

export default Ember.Controller.extend({
  isSideNavVisible: false,
  showMenus: true,
  klubs: Ember.inject.controller(),
  "seznam-klubov/klubs": Ember.inject.controller(),
  "obcinas/obcina-category": Ember.inject.controller(),
  router: Ember.inject.service(),

  category: Ember.computed(
    "router.currentRouteName",
    "klubs.category",
    "seznam-klubov/klubs.category",
    "obcinas/obcina-category.category",
    function() {
      let router = this.get("router");
      if (router.get("currentRouteName") === "klubs.index") {
        return this.get("klubs.category");
      } else if (router.get("currentRouteName") === "seznam-klubov.klubs") {
        return this.get("seznam-klubov/klubs.category");
      } else if (
        router.get("currentRouteName") === "obcinas.obcina-category.index"
      ) {
        return this.get("obcinas/obcina-category.category");
      } else {
        return null;
      }
    }
  ),

  isShowPage: Ember.computed("router.currentRouteName", function() {
    let router = this.get("router");
    return ["embeds.categoryklubs.klub.index", "klubs.klub.index"].includes(
      router.get("currentRouteName")
    );
  }),

  hideSideNav: Ember.observer("currentPath", function() {
    this.set("isSideNavVisible", false);
  }),

  isEmbeddedPage: Ember.computed("router.currentRouteName", function() {
    let route = this.get("router").get("currentRouteName");
    let matcher = "embeds";
    return (
      route.substr(0, matcher.length).toLowerCase() === matcher.toLowerCase()
    );
  }),

  actions: {
    hideMenus() {
      this.set("showMenus", false);
    }
  }
});
