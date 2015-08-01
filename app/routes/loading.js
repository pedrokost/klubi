import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Loading...',
  renderTemplate() {
    this.render('klubs');
  }
});
