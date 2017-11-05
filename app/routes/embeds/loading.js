import Route from '@ember/routing/route';

export default Route.extend({
  titleToken: 'Loading...',
  renderTemplate() {
    this.render('embeds.categoryklubs');
  }
});
