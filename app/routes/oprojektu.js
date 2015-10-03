import Ember from 'ember';
import RouteMetaMixin from 'ember-cli-meta-tags/mixins/route-meta';

export default Ember.Route.extend(RouteMetaMixin, {
  titleToken: 'O projektu',
  meta: {
    'name': {
      'description': 'Najdi najboljši fitnes, vadbeni center, karate dojo, wellness center, frizbi klub, judo dojo, gimnastično društvo v svoji bližini. Smo največja Slovenska baza fitnesov, karate klubov, judo klubov, frizbi klubov, in več!'
    }
  },
  afterModel: function(model, transition) {
    transition.then(function() {
      Ember.run.scheduleOnce('afterRender', this, function() {
        console.log('Done Transitioning');
        window.prerenderReady = true;
      });
    });
  }
});
