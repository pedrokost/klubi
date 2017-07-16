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
        thumbnail: assetMap.resolve("assets/social/fb-fitnes.png")
      }),
      Ember.Object.create({
        identifier: "wellness",
        name: "Wellness",
        thumbnail: assetMap.resolve("assets/social/fb-wellness.png")
      }),
      Ember.Object.create({
        identifier: "karate",
        name: "Karate",
        thumbnail: assetMap.resolve("assets/social/fb-karate.png")
      }),
      Ember.Object.create({
        identifier: "frizbi",
        name: "Frizbi",
        thumbnail: assetMap.resolve("assets/social/fb-frizbi.png")
      }),
      Ember.Object.create({
        identifier: "judo",
        name: "Judo",
        isBeta: true,
        thumbnail: assetMap.resolve("assets/social/fb-judo.png")
      }),
      Ember.Object.create({
        identifier: "gimnastika",
        name: "Gimnastika",
        isBeta: true,
        thumbnail: assetMap.resolve("assets/social/fb-gimnastika.png")
      }),
      Ember.Object.create({
        identifier: "cheerleading",
        name: "Cheerleading",
        isBeta: true,
        thumbnail: assetMap.resolve("assets/social/fb-cheerleading.png")
      }),
      Ember.Object.create({
        identifier: "nogomet",
        name: "Nogomet",
        isBeta: true,
        thumbnail: assetMap.resolve("assets/social/fb-nogomet.png")
      }),
      Ember.Object.create({
        identifier: "squash",
        name: "Squash",
        isBeta: true,
        thumbnail: assetMap.resolve("assets/social/fb-squash.png")
      }),
      Ember.Object.create({
        identifier: "tenis",
        name: "Tenis",
        isBeta: true,
        thumbnail: assetMap.resolve("assets/social/fb-tenis.png")
      })
    ]);

    this.set("list", categories);
  }),

  isSupported: function(categoryIdentifier) {
    return (
      this.get("list").filter(
        category => category.identifier === categoryIdentifier
      ).length > 0
    );
  }
});
