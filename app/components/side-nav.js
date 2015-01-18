import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['sliding-menu-content'],
  classNameBindings: ['visible:is-visible']
});
