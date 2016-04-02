import Ember from 'ember';

var alreadyRun = false;

export default {
  name: 'modify-model',
  initialize() {
    if (alreadyRun) {
      return;
    } else {
      alreadyRun = true;
    }

    Ember.LinkComponent.reopen({
      init() {
        this._super();
        var self = this;

        // bind attributes beginning with 'data-'
        Object.keys(this).forEach(function(key) {
          if (key.substr(0, 5) === 'data-') {
            self.get('attributeBindings').pushObject(key);
          }
        });
      }
    });
  }
};

