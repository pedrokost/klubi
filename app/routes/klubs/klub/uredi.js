import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate() {
    this.render('klubs.klub.uredi', {
      into: 'application'
    });
  },
  model() {
    return this.modelFor('klubs.klub');
  }
});
