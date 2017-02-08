import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Nalagam...',
  renderTemplate() {
    this.render('klubs')
  }
});
