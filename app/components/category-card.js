import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  classNames: ["card", "js-category-card"],

  title: computed("obcina.name", "category.name", function() {
    const obcinaName = this.get("obcina.name");
    const categoryName = this.get("category.name");

    return `${categoryName} v občini ${obcinaName}`;
  })
});
