import Ember from 'ember';
import Prerenderable from 'zatresi/mixins/after-render-prerenderable';

export default Ember.Route.extend(Prerenderable, {
  titleToken: 'Dodaj klub',
  headTags: [{
    type: 'meta',
    tagId: 'meta-description',
    attrs: {
      name: 'description',
      content: 'Dodaj športni klub v največjo bazo športnih (fitnes, karate, judo, gimnastika, itd) klubov v Sloveniji.'
    }
  }, {
    type: 'link',
    tagId: 'link-canonical',
    attrs: {
      rel: 'canonical',
      content: 'http://www.zatresi.si/dodaj-klub'
    }
  }, {
    type: 'meta',
    tagId: 'meta-og-url',
    attrs: {
      property: 'og:url',
      content: 'http://www.zatresi.si/dodaj-klub'
    }
  }],
  model() {
    return this.store.createRecord('klub', {
      // name: 'Name',
      // email: 'name@klub.com',
      // address: 'Za Gasilskim domom 11, 1290 Grosuplje'
    });
  }
});
