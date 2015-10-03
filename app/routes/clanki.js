import Ember from 'ember';
import RouteMetaMixin from 'ember-cli-meta-tags/mixins/route-meta';

export default Ember.Route.extend(RouteMetaMixin, {
  titleToken: 'Članki, novice in novosti',
  meta: {
    'name': {
      'description': 'Agregator novic športnih klubov, športnih prireditev in novosti v Sloveniji.'
    }
  },
  model() {
    return this.store.findAll('clanek');
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
