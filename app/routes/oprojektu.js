import Ember from 'ember';
import RouteMetaMixin from 'ember-cli-meta-tags/mixins/route-meta';
import Prerenderable from 'zatresi/mixins/after-render-prerenderable';

export default Ember.Route.extend(RouteMetaMixin, Prerenderable, {
  titleToken: 'O projektu',
  meta: {
    'name': {
      'description': 'Najdi najboljši fitnes, vadbeni center, karate dojo, wellness center, frizbi klub, judo dojo, gimnastično društvo v svoji bližini. Smo največja Slovenska baza fitnesov, karate klubov, judo klubov, frizbi klubov, in več!'
    }
  }
});
