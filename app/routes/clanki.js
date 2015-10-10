import Ember from 'ember';
import RouteMetaMixin from 'ember-cli-meta-tags/mixins/route-meta';
import Prerenderable from 'zatresi/mixins/after-render-prerenderable';

export default Ember.Route.extend(RouteMetaMixin, Prerenderable, {
  titleToken: 'Članki, novice in novosti',
  meta: {
    'name': {
      'description': 'Agregator novic športnih klubov, športnih prireditev in novosti v Sloveniji.'
    }
  },
  model() {
    return this.store.findAll('clanek');
  }
});
