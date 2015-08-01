import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Članki, novice in novosti',
  model() {
    return this.store.findAll('clanek');
  }
});
