import Route from '@ember/routing/route';

export default Route.extend({

  renderTemplate() {
    this.render('klubs.klub.uredi', {
      into: 'application'
    });
  },
  model() {
    return this.modelFor('klubs.klub');
  }
});
