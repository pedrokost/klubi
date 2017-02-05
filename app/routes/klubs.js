import Ember from 'ember'
import ENV from '../config/environment';
import _, { intersection } from 'klubi/helpers/intersection';

export default Ember.Route.extend({
  assetMap: Ember.inject.service('asset-map'),
  title(tokens) {
    var category = this.controllerFor(this.routeName).get('category')
    if (tokens.length > 0) {
      return tokens.reverse().join(' - ')
    }
    return `${category.capitalize()} klubi`
  },
  headTags() {
    var category = this.controllerFor(this.routeName).get('category')

    let canonical = `http://www.klubi.si/${category}`

    return [{
      type: 'meta',
      tagId: 'meta-description',
      attrs: {
        name: 'description',
        content: `Najdi najboljši ${category} klub v svoji bližini. Smo največja Slovenska baza ${category} in drugih športnih klubov!`
      }
    }, {
      type: 'meta',
      tagId: 'meta-og-description',
      attrs: {
        property: 'og:description',
        content: `Najdi najboljši ${category} klub v svoji bližini. Smo največja Slovenska baza ${category} in drugih športnih klubov!`
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
        content: `Športni Klubi ${category}`
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
  beforeModel(transition) {

    var categoryToLoad = transition.state.params.klubs.category
    if (categoryToLoad && ENV.supportedCategories.indexOf(categoryToLoad) === -1) {
      transition.abort()
      let that = this
      this.store.findRecord('klub', categoryToLoad).then(function (klub) {

        // Do not naively take the first category, but the first in the
        const valid_categories = intersection(klub.get('categories'), ENV.supportedCategories);

        // set of supported categories
        // Let it fail if no valid categories, it just shouldn't happen
        that.transitionTo('klubs.klub', valid_categories[0], klub)
      })
    }

    // To show the user a category change is in progress, remove the currently shown data, so I can display a spinner
    this.controllerFor(this.routeName).set('model', Ember.A())
  },
  model(params) {
    this.controllerFor(this.routeName).set('category', params.category)
    return this.store.query('klub', params)
  }
})
