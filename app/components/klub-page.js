import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['klub_page js-close'],

  isUnverified: Ember.computed('klub.verified', function() {
    // === to avoid geting undefined and showing the warning while the
    // model is being loaded
    return this.get('klub.verified') === false
  }),

  click(evt) {
    // The purpose of whitelisting the close action is to enable selecting
    // the text on the page to copy it.
    if (evt.target.classList.contains('js-close')) {
      this.sendAction();
    }
  }
});
