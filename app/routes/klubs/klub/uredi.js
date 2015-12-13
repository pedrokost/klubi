import Ember from 'ember';

export default Ember.Route.extend({

  // TODO: make categories a string, not an array
  // TODO: if no klubid provided, redirect to add klub page
  // TODO: instead of editing the model directly, edit a clone
  renderTemplate() {
    this.render('klubs.klub.uredi', {
      into: 'application'
    });
  },
  model() {
    return this.modelFor('klubs.klub');
  }
});
