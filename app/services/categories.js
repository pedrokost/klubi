import EmberObject from '@ember/object';
import { on } from '@ember/object/evented';
import { A } from '@ember/array';
import Service, { inject as service } from '@ember/service';

export default Service.extend({
  assetMap: service("asset-map"),

  list: A([]),

  setup: on("init", function() {
    const assetMap = this.get("assetMap");

    var categories = A([
      EmberObject.create({
        identifier: "fitnes",
        name: "Fitnes",
        thumbnail: "/assets/social/fb-fitnes.png"
      }),
      EmberObject.create({
        identifier: "karate",
        name: "Karate",
        thumbnail: "/assets/social/fb-karate.png"
      }),
      EmberObject.create({
        identifier: "frizbi",
        name: "Frizbi",
        thumbnail: "/assets/social/fb-frizbi.png"
      }),
      EmberObject.create({
        identifier: "wellness",
        name: "Wellness",
        thumbnail: "/assets/social/fb-wellness.png"
      }),
      EmberObject.create({
        identifier: "judo",
        name: "Judo",
        isBeta: true,
        thumbnail: "/assets/social/fb-judo.png"
      }),
      EmberObject.create({
        identifier: "gimnastika",
        name: "Gimnastika",
        isBeta: true,
        thumbnail: "/assets/social/fb-gimnastika.png"
      }),
      EmberObject.create({
        identifier: "cheerleading",
        name: "Cheerleading",
        isBeta: true,
        thumbnail: "/assets/social/fb-cheerleading.png"
      }),
      EmberObject.create({
        identifier: "nogomet",
        name: "Nogomet",
        isBeta: true,
        thumbnail: "/assets/social/fb-nogomet.png"
      }),
      EmberObject.create({
        identifier: "squash",
        name: "Squash",
        isBeta: true,
        thumbnail: "/assets/social/fb-squash.png"
      }),
      EmberObject.create({
        identifier: "tenis",
        name: "Tenis",
        isBeta: true,
        thumbnail: "/assets/social/fb-tenis.png"
      }),
      EmberObject.create({
        identifier: "kosarka",
        name: "Košarka",
        isBeta: true,
        thumbnail: "/assets/social/fb-kosarka.png"
      }),
      EmberObject.create({
        identifier: "boks",
        name: "Boks",
        isBeta: true,
        thumbnail: "/assets/social/fb-boks.png"
      }),
      EmberObject.create({
        identifier: "badminton",
        name: "Badminton",
        isBeta: true,
        thumbnail: "/assets/social/fb-badminton.png"
      }),
      EmberObject.create({
        identifier: "atletika",
        name: "Atletika",
        isBeta: true,
        thumbnail: "/assets/social/fb-atletika.png"
      }),
      EmberObject.create({
        identifier: "namizni-tenis",
        name: "Namizni tenis",
        isBeta: true,
        thumbnail: "/assets/social/fb-namizni-tenis.png"
      }),
      EmberObject.create({
        identifier: "ju-jitsu",
        name: "Ju-jitsu",
        isBeta: true,
        thumbnail: "/assets/social/fb-ju-jitsu.png"
      }),
      EmberObject.create({
        identifier: "rugby",
        name: "Rugby",
        isBeta: true,
        thumbnail: "/assets/social/fb-rugby.png"
      }),
      EmberObject.create({
        identifier: "sabljanje",
        name: "Sabljanje",
        isBeta: true,
        thumbnail: "/assets/social/fb-sabljanje.png"
      }),
      EmberObject.create({
        identifier: "lokostrelstvo",
        name: "Lokostrelstvo",
        isBeta: true,
        thumbnail: "/assets/social/fb-lokostrelstvo.png"
      }),
      EmberObject.create({
        identifier: "kickbox",
        name: "Kickbox",
        isBeta: true,
        thumbnail: "/assets/social/fb-kickbox.png"
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
