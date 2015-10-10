import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['rrssb-buttons', 'rrssb-buttons--zatresi'],
  classNameBindings: ['isShowPage:is-show-page'],

  didInsertElement() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      rrssbInit();
    });
  }
});
