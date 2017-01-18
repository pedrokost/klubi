import Ember from 'ember';

var alreadyRun = false;


function inIframe () {
  try {
    return window.self !== window.top;
  } catch (e) {
    return false;
  }
}

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

        // Make links open in new blank page if the app is rendered
        // from an iframe (embedded klubs)
        if (inIframe()) {
          this.set('target', '_blank');
        }

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

