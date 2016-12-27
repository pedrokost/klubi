import Ember from 'ember';
import Prerenderable from 'zatresi/mixins/after-render-prerenderable';

export default Ember.Route.extend(Prerenderable, {
  assetMap: Ember.inject.service('asset-map'),
  title(tokens) {
    var category = this.controllerFor(this.routeName).get('category')
    if (tokens.length > 0) {
      return tokens.reverse().join(' - ')
    }
    return `Seznam ${category.capitalize()} klubov v Sloveniji`
  },
  headTags() {
    var category = this.controllerFor(this.routeName).get('category')

    let canonical = `http://www.zatresi.si/seznam-klubov/${category}`

    return [{
      type: 'meta',
      tagId: 'meta-description',
      attrs: {
        name: 'description',
        content: `Seznam vseh ${category} klubov v Sloveniji.`
      }
    }, {
      type: 'meta',
      tagId: 'meta-og-description',
      attrs: {
        property: 'og:description',
        content: `Seznam vseh ${category} klubov v Sloveniji.`
      }
    }, {
      type: 'link',
      tagId: 'link-canonical',
      attrs: {
        rel: 'canonical',
        content: canonical
      }
    }, {
      type: 'meta',
      tagId: 'meta-og-type',
      attrs: {
        property: 'og:type',
        content: 'website'
      }
    }, {
      type: 'meta',
      tagId: 'meta-og-url',
      attrs: {
        property: 'og:url',
        content: canonical
      }
    }, {
      type: 'meta',
      tagId: 'meta-og-title',
      attrs: {
        property: 'og:title',
        content: `Seznam ${category} klubov v Sloveniji`
      }
    }, {
      type: 'meta',
      tagId: 'meta-og-image',
      attrs: {
        property: 'og:image',
        content: this.get('assetMap').resolve(`assets/social/fb-${category}.png`)
      }
    }]
  },
  model(params) {
    this.controllerFor(this.routeName).set('category', params.category)
    return this.store.query('klub', params)
  }
});
