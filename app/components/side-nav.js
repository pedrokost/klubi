import Component from '@ember/component';

export default Component.extend({
  tagName: 'nav',
  classNames: ['sliding-menu-content'],
  classNameBindings: ['visible:is-visible']
});
