import { A } from "@ember/array";
import { computed } from "@ember/object";
import { gt } from "@ember/object/computed";
import Component from "@ember/component";

export default Component.extend({
  classNames: ["klub-card"],
  classNameBindings: ["cardClass"],
  // TODO: add class name binding for type of card

  hasFamily: gt("family.length", 1),

  cardClass: computed("hasFamily", function() {
    if (this.hasFamily) {
      return "klub-card--with-branches";
    } else {
      return "klub-card--without-branches";
    }
  }),

  cardType: computed("hasFamily", function() {
    if (this.hasFamily) {
      return "klub-card-with-branches";
    } else {
      return "klub-card";
    }
  }),

  family: computed("klub", "klub.parent", "klub.branches", function() {
    let klub = this.klub;
    let family = A([klub]);
    if (klub.get("parent.content")) {
      family.pushObject(klub.get("parent.content"));
    }
    if (klub.get("branches.length")) {
      klub.get("branches").forEach(function(b) {
        family.pushObject(b);
      });
    }

    return family;
  })
});
