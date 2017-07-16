import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["recent-categories"],
  isCategorySupported: true,
  categories: Ember.inject.service(),

  recentCategories: Ember.computed.alias("categories.list"),

  linkDestination: "klubs"
});
