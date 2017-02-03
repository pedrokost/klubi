import Ember from 'ember';

// window.ENV = window.ENV || {};
// window.ENV.LOG_EVENT_TRACKING = true; // Google Analytics see what is tracked

export default Ember.Route.extend({
  title(tokens) {
    if (!!tokens.length) {
      return tokens.reverse().join(' - ') + ' - klubi.si';
    }
    return 'Kje bos treniral? - klubi.si';
  },
  headTags() {
    return [{
      type: 'meta',
      tagId: 'meta-description',
      attrs: {
        name: 'description',
        content: 'Najdi najboljši fitnes, vadbeni center, karate dojo, wellness center, frizbi klub, judo dojo, gimnastično društvo v svoji bližini. Smo največja Slovenska baza fitnesov, karate klubov, judo klubov, frizbi klubov, in več!'
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
      tagId: 'meta-og-description',
      attrs: {
        property: 'og:description',
        content: 'Najdi najboljši fitnes, vadbeni center, karate dojo, wellness center, frizbi klub, judo dojo, gimnastično društvo v svoji bližini. Smo največja Slovenska baza fitnesov, karate klubov, judo klubov, frizbi klubov, in več!'
      }
    }, {
      type: 'link',
      tagId: 'link-canonical',
      attrs: {
        rel: 'canonical',
        content: 'http://www.klubi.si'
      }
    }, {
      type: 'meta',
      tagId: 'meta-og-url',
      attrs: {
        property: 'og:url',
        content: 'http://www.klubi.si'
      }
    }, {
      type: 'meta',
      tagId: 'meta-og-title',
      attrs: {
        property: 'og:title',
        content: 'Kje bos treniral?'
      }
    }, {
      type: 'meta',
      tagId: 'meta-og-image',
      attrs: {
        property: 'og:image',
        content: 'assets/social/fb-klubi.png'
      }
    }];
  },
  actions: {
    toggleSideNav() {
      this.controllerFor('application').toggleProperty('isSideNavVisible');
    }
  }
});
