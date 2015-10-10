import Ember from 'ember';
import RouteMetaMixin from 'ember-cli-meta-tags/mixins/route-meta';

export default Ember.Route.extend(RouteMetaMixin, {
  title(tokens) {
    if (!!tokens.length) {
      return tokens.reverse().join(' - ');
    }
    return 'Športni Klubi';
  },
  queryParams: {
    category: {
      refreshModel: true
    }
  },
  meta: function() {
    var category = this.controllerFor(this.routeName).get('category');
    return {
      'name': {
        'description': `Najdi najboljši ${category} klub v svoji bližini. Smo največja Slovenska baza ${category} in drugih športnih klubov!`
      }
    }
  },
  beforeModel() {
    // To show the user a category change is in progress, remove the currently shown data, so I can display a spinner
    this.controllerFor('klubs').set('model', Ember.A());
  },
  model(params) {
    return this.store.query('klub', params);
  }
});
