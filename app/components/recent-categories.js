import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  classNames: ["recent-categories"],
  isCategorySupported: true,
  categories: service(),

  recentCategories: alias("categories.list"),

  linkDestination: "klubs"
});
