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
  }],
  model() {
    return this.store.createRecord('klub', {
      // name: 'Name',
      // email: 'name@klub.com',
      // address: 'Za Gasilskim domom 11, 1290 Grosuplje'
    });
  }
});
