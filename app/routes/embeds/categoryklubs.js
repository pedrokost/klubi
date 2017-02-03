import Ember from 'ember'

export default Ember.Route.extend({
  assetMap: Ember.inject.service('asset-map'),
  beforeModel() {
    this.controllerFor('application').send('hideMenus')
  },
  model(params) {
    this.controllerFor(this.routeName).set('category', params.category)
    return this.store.query('klub', params)
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
  }
})
