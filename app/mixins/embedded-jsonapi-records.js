import Ember from 'ember';
import {pluralize} from 'ember-inflector';

export default Ember.Mixin.create({

  _serializeEmbeddedHasMany(snapshot, json, relationship) {
    this._super(snapshot, json, relationship);
    var attr = relationship.key;
    if (!json['relationships']) {
      json['relationships'] = {};
    }
    let serializedKey = this.keyForRelationship(attr, relationship.kind, 'serialize')
    const serializedRecords = {
      'data': json[attr].map(function(el) {
        return el['data'];
      })
    }
    json['relationships'][serializedKey] = serializedRecords;
    delete json[attr];
  },

  serializeHasMany: function(snapshot, json, relationship) {
    var attr = relationship.key;
    if (this.noSerializeOptionSpecified(attr)) {
      this._super(snapshot, json, relationship)
      return;
    }
    this._serializeEmbeddedHasMany(snapshot, json, relationship);
  }
});
