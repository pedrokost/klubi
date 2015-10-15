import Ember from 'ember';

var alreadyRun = false;

export default {
  name: 'modify-model',
  initialize: function() {
    if (alreadyRun) {
      return;
    } else {
      alreadyRun = true;
    }

    Ember.LinkComponent.reopen({
      init: function() {
        this._super();
        var self = this;

        // bind attributes beginning with 'data-'
        Em.keys(this).forEach(function(key) {
          if (key.substr(0, 5) === 'data-') {
            self.get('attributeBindings').pushObject(key);
          }
        });
      }
    });
  }
};

