import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({

  extract: function(store, type, payload, id, requestType) {
    payload = {
      'clanki': payload.clanki
    };
    console.log(payload)
    return this._super(store, type, payload, id, requestType);
  }
});
