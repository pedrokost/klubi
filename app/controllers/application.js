import { computed, observer } from "@ember/object";
import { inject as service } from "@ember/service";
import Controller, { inject as controller } from "@ember/controller";

export default Controller.extend({
  isSideNavVisible: false,
  showMenus: true,
  klubs: controller(),
  "seznam-klubov/klubs": controller(),
  "obcinas/obcina-category": controller(),
  router: service(),

  category: computed(
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

  isShowPage: computed("router.currentRouteName", function() {
    let router = this.get("router");
    return ["embeds.categoryklubs.klub.index", "klubs.klub.index"].includes(
      router.get("currentRouteName")
    );
  }),

  hideSideNav: observer("currentPath", function() {
    this.set("isSideNavVisible", false);
  }),

  isEmbeddedPage: computed("router.currentRouteName", function() {
    let route = this.get("router.currentRouteName");
    let matcher = "embeds";
    return (
      route.substr(0, matcher.length).toLowerCase() === matcher.toLowerCase()
    );
  }),

  actions: {
    hideMenus() {
      this.set("showMenus", false);
    },

    toggleSideNav() {
      this.toggleProperty("isSideNavVisible");
    }
  }
});
