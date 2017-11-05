import Component from '@ember/component';

export default Component.extend({
  classNames: ['js-menu-screen', 'sliding-menu-fade-screen'],
  classNameBindings: ['visible:is-visible'],

  click() {
    this.sendAction('action');
  }
});
