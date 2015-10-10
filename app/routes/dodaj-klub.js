import Ember from 'ember';
import RouteMetaMixin from 'ember-cli-meta-tags/mixins/route-meta';
import Prerenderable from 'zatresi/mixins/after-render-prerenderable';

export default Ember.Route.extend(RouteMetaMixin, Prerenderable, {
  titleToken: 'Dodaj klub',
  meta: {
    'name': {
      'description': 'Dodaj športni klub v največjo bazo športnih (fitnes, karate, judo, gimnastika, itd) klubov v Sloveniji.'
    }
  },
  model() {
    return this.store.createRecord('klub', {
      // name: 'Name',
      // email: 'name@klub.com',
      // address: 'Za Gasilskim domom 11, 1290 Grosuplje'
    });
  }
});
