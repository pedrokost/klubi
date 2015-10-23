import Ember from 'ember';
export default Ember.Route.extend({
  title(tokens) {
    if (!!tokens.length) {
      return tokens.reverse().join(' - ') + ' - zatresi.si';
    }
    return 'Kje bos treniral? - zatresi.si';
  },
  headTags: [{
    type: 'meta',
    tagId: 'meta-description',
    attrs: {
      name: 'description',
      content: 'Iskalnik klubov v Sloveniji'
    }
  }, {
    type: 'link',
    tagId: 'link-canonical',
    attrs: {
      rel: 'canonical',
      content: 'http://www.zatresi.si'
    }
  }, {
    type: 'meta',
    tagId: 'meta-og-url',
    attrs: {
      property: 'og:url',
      content: 'http://www.zatresi.si'
    }
  }, {
    type: 'meta',
    tagId: 'meta-og-title',
    attrs: {
      property: 'og:title',
      content: 'Kje bos treniral?'
    }
  }],
  actions: {
    toggleSideNav() {
      this.controllerFor('application').toggleProperty('isSideNavVisible');
    }
  }
});
