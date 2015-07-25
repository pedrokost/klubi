import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Loading...',
  renderTemplate: function() {
    this.render('embeds.categoryklubs');
  }
});
