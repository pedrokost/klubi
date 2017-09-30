import Ember from "ember";

export default Ember.Service.extend({
  assetMap: Ember.inject.service("asset-map"),

  list: Ember.A([]),

  setup: Ember.on("init", function() {
    const assetMap = this.get("assetMap");

    var categories = Ember.A([
      Ember.Object.create({
        identifier: "fitnes",
        name: "Fitnes",
        thumbnail: "/assets/social/fb-fitnes.png"
      }),
      Ember.Object.create({
        identifier: "karate",
        name: "Karate",
        thumbnail: "/assets/social/fb-karate.png"
      }),
      Ember.Object.create({
        identifier: "frizbi",
        name: "Frizbi",
        thumbnail: "/assets/social/fb-frizbi.png"
      }),
      Ember.Object.create({
        identifier: "wellness",
        name: "Wellness",
        thumbnail: "/assets/social/fb-wellness.png"
      }),
      Ember.Object.create({
        identifier: "judo",
        name: "Judo",
        isBeta: true,
        thumbnail: "/assets/social/fb-judo.png"
      }),
      Ember.Object.create({
        identifier: "gimnastika",
        name: "Gimnastika",
        isBeta: true,
        thumbnail: "/assets/social/fb-gimnastika.png"
      }),
      Ember.Object.create({
        identifier: "cheerleading",
        name: "Cheerleading",
        isBeta: true,
        thumbnail: "/assets/social/fb-cheerleading.png"
      }),
      Ember.Object.create({
        identifier: "nogomet",
        name: "Nogomet",
        isBeta: true,
        thumbnail: "/assets/social/fb-nogomet.png"
      }),
      Ember.Object.create({
        identifier: "squash",
        name: "Squash",
        isBeta: true,
        thumbnail: "/assets/social/fb-squash.png"
      }),
      Ember.Object.create({
        identifier: "tenis",
        name: "Tenis",
        isBeta: true,
        thumbnail: "/assets/social/fb-tenis.png"
      }),
      Ember.Object.create({
        identifier: "kosarka",
        name: "Košarka",
        isBeta: true,
        thumbnail: "/assets/social/fb-kosarka.png"
      })
    ]);

    this.set("list", categories);
  }),

  humanizeCategory: function(categoryIdentifier) {
    let category = this.get("list").filter(
      category => category.identifier === categoryIdentifier
    );
    if (category.length > 0) {
      return category[0].name;
    } else {
      return categoryIdentifier.capitalize();
    }
  },

  isSupported: function(categoryIdentifier) {
    return (
      this.get("list").filter(
        category => category.identifier === categoryIdentifier
      ).length > 0
    );
  }
});
