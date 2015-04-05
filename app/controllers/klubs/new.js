import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Controller.extend({
  needs: ['application'],
  editorEmail: null,
  actions: {
    sendNewKlubEmail: function() {
      var self = this;
      var klub = this.get('model');
      var editorEmail = this.get('editorEmail');
      klub = JSON.parse(JSON.stringify(klub));
      klub.editor = editorEmail;
      klub.facebook_url = klub.facebookUrl;
      delete klub.facebookUrl;
      var data = JSON.stringify({klub: klub});

      Ember.$.ajax({
        url: ENV.host + '/klubs',
        method: 'POST',
        data: data,
        accepts: 'application/json',
        processData: false,
        contentType: 'application/json'
      }).done(function() {
        /* TODO: Use ember-cli-flash-messages instead of this */
        var message = Ember.Object.create({
          type: 'success',
          message: 'Tvoj vnos je bil uspešno poslan in bo v kratken obravnavan. Hvala ;)'
        });
        self.get('controllers.application.flashMessages').pushObject(message);
        Ember.run.later(function() {
          self.get('controllers.application.flashMessages').removeObject(message);
        }, 5000);
        self.transitionToRoute('klubs');
      }).fail(function() {
        /* TODO: Implement a nice error handling thingy */
        debugger;
        alert('error');
      });
    }
  }
});
