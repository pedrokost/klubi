import Route from '@ember/routing/route';
import Prerenderable from "klubi/mixins/after-render-prerenderable";

export default Route.extend(Prerenderable, {
  titleToken: "O projektu",
  headTags: [
    {
      type: "meta",
      tagId: "meta-description",
      attrs: {
        name: "description",
        content: "Najdi najboljši fitnes, vadbeni center, karate dojo, wellness center, frizbi klub, judo dojo, gimnastično društvo v svoji bližini. Smo največja Slovenska baza fitnesov, karate klubov, judo klubov, frizbi klubov, in več!"
      }
    },
    {
      type: "link",
      tagId: "link-canonical",
      attrs: {
        rel: "canonical",
        content: "https://www.klubi.si/oprojektu"
      }
    },
    {
      type: "meta",
      tagId: "meta-og-url",
      attrs: {
        property: "og:url",
        content: "https://www.klubi.si/oprojektu"
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
      tagId: "meta-og-title",
      attrs: {
        property: "og:title",
        content: "O projektu"
      }
    },
    {
      type: "meta",
      tagId: "meta-og-description",
      attrs: {
        property: "og:description",
        content: "Najdi najboljši fitnes, vadbeni center, karate dojo, wellness center, frizbi klub, judo dojo, gimnastično društvo v svoji bližini. Smo največja Slovenska baza fitnesov, karate klubov, judo klubov, frizbi klubov, in več!"
      }
    }
  ]
});
