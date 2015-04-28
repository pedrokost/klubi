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
      const flashMessages = Ember.get(this, 'flashMessages');

      Ember.$.ajax({
        url: ENV.host + '/klubs',
        method: 'POST',
        data: data,
        accepts: 'application/json',
        processData: false,
        contentType: 'application/json'
      }).done(function() {
        flashMessages.success('Hvala za obvestilo o klubu ;)! Podatke bomo preverili in klub v kratkem prikazali na strani');
        self.transitionToRoute('klubs');
      }).fail(function() {
        flashMessages.error('Prišlo je do neznane napake pri shranjevanju podatkov o klubu :( Če ti ponovno ne uspe, me o tem prosim obesti na pedro@zatresi.si.');
      });
    }
  }
});
