import Ember from "ember";

export default Ember.Route.extend({
  assetMap: Ember.inject.service("asset-map"),
  titleToken(obcina) {
    return obcina.get("name");
  },
  title([obcina_name]) {
    let category = this.controllerFor(this.routeName).get("category");
    return `${category.capitalize()} v občini ${obcina_name}`;
  },
  headTags() {
    var category = this.controllerFor(this.routeName).get("category");
    var obcina = this.modelFor(this.routeName);

    let canonical = `https://www.klubi.si/obcina/${obcina.id}/${category}`;
    let description = `Seznam vseh ${category} klubov v občini ${obcina.get("name")}`;
    let title = `${category.capitalize()} v občini ${obcina.get("name")}`;

    return [
      {
        type: "meta",
        tagId: "meta-description",
        attrs: {
          name: "description",
          content: description
        }
      },
      {
        type: "meta",
        tagId: "meta-og-description",
        attrs: {
          property: "og:description",
          content: description
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
          content: title
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
  model(params) {
    this.controllerFor(this.routeName).set("category", params.category);
    // HACK: I am abusing `adapterOptions` for passing the category
    return this.store.findRecord("obcina", params.obcina_id, {
      include: "all",
      adapterOptions: {
        category: params.category
      }
    });
  }
});
