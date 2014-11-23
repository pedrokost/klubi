import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['klub_page js-close'],

  click: function(evt){
    // The purpose of whitelisting the close action is to enable selecting
    // the text on the page to copy it.
    if (evt.target.classList.contains('js-close')) {
      this.sendAction();
    }
  }
});
