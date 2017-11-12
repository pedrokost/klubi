import { next } from "@ember/runloop";
import { Promise as EmberPromise } from "rsvp";
import { A } from "@ember/array";
import { inject as service } from "@ember/service";
import Route from "@ember/routing/route";
import ENV from "../config/environment";
import _, { intersection } from "klubi/helpers/intersection";

export default Route.extend({
  assetMap: service("asset-map"),
  map: service(),
  categories: service(),
  title(tokens) {
    const categories = this.get("categories");
    var category = this.controllerFor(this.routeName).get("category");
    if (tokens.length > 0) {
      return tokens.reverse().join(" - ");
    }
    return `${categories.humanizeCategory(category)} klubi`;
  },
  headTags() {
    var category = this.controllerFor(this.routeName).get("category");

    let canonical = `https://www.klubi.si/${category}`;

    return [
      {
        type: "meta",
        tagId: "meta-description",
        attrs: {
          name: "description",
          content: `Najdi najboljši ${category} klub v svoji bližini. Smo največja Slovenska baza ${category} in drugih športnih klubov!`
        }
      },
      {
        type: "meta",
        tagId: "meta-og-description",
        attrs: {
          property: "og:description",
          content: `Najdi najboljši ${category} klub v svoji bližini. Smo največja Slovenska baza ${category} in drugih športnih klubov!`
        }
      },
      {
        type: "link",
        tagId: "link-canonical",
        attrs: {
          rel: "canonical",
          content: canonical
        }
      },
      {
        type: "meta",
        tagId: "meta-og-type",
        attrs: {
          property: "og:type",
          content: "website"
        }
      },
      {
        type: "meta",
        tagId: "meta-og-url",
        attrs: {
          property: "og:url",
          content: canonical
        }
      },
      {
        type: "meta",
        tagId: "meta-og-title",
        attrs: {
          property: "og:title",
          content: `Športni Klubi ${category}`
        }
      },
      {
        type: "meta",
        tagId: "meta-og-image",
        attrs: {
          property: "og:image",
          content: this.get("assetMap").resolve(
            `assets/social/fb-${category}.png`
          )
        }
      }
    ];
  },
  beforeModel(transition) {
    const routeController = this.controllerFor(this.routeName);

    // Reset default viewport when switching category
    routeController.setProperties({
      isLoading: true
    });

    this.get("map").zoomOut();

    // To show the user a category change is in progress, remove the currently shown data, so I can display a spinner
    this.controllerFor(this.routeName).set("model", A());
  },
  model(params) {
    const routeController = this.controllerFor(this.routeName);

    routeController.set("category", params.category);
    var that = this;
    return this.store.query("klub", params).then(function(data) {
      /* Give time for the loading screen to properly render
      and not appear frozen */

      return new EmberPromise(function(resolve, reject) {
        return next(this, function() {
          routeController.set("isLoading", false);
          resolve(data);
        });
      });
    });
  }
});
