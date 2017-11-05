import Route from '@ember/routing/route';
import Prerenderable from "klubi/mixins/after-render-prerenderable";

export default Route.extend(Prerenderable, {
  titleToken: "Dodaj klub",
  headTags: [
    {
      type: "meta",
      tagId: "meta-description",
      attrs: {
        name: "description",
        content: "Dodaj športni klub v največjo bazo športnih (fitnes, karate, judo, gimnastika, itd) klubov v Sloveniji."
      }
    },
    {
      type: "meta",
      tagId: "meta-og-description",
      attrs: {
        property: "og:description",
        content: "Dodaj športni klub v največjo bazo športnih (fitnes, karate, judo, gimnastika, itd) klubov v Sloveniji."
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
      type: "link",
      tagId: "link-canonical",
      attrs: {
        rel: "canonical",
        content: "https://www.klubi.si/dodaj-klub"
      }
    },
    {
      type: "meta",
      tagId: "meta-og-url",
      attrs: {
        property: "og:url",
        content: "https://www.klubi.si/dodaj-klub"
      }
    },
    {
      type: "meta",
      tagId: "meta-og-title",
      attrs: {
        property: "og:title",
        content: "Dodaj klub"
      }
    }
  ],
  model() {
    return this.store.createRecord(
      "klub",
      {
        // name: 'Name',
        // email: 'name@klub.com',
        // categories: ['fitnes', 'hoho'],
        // address: 'Za Gasilskim domom 11, 1290 Grosuplje',
        // editor: 'test@test.com'
      }
    );
  }
});
