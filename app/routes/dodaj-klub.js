import Ember from 'ember';
import RouteMetaMixin from 'ember-cli-meta-tags/mixins/route-meta';

export default Ember.Route.extend(RouteMetaMixin, {
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
  },
  afterModel(model, transition) {
    transition.then(function() {
      Ember.run.scheduleOnce('afterRender', this, function() {
        console.log('Done Transitioning');
        window.prerenderReady = true;
      });
    });
  }
});
