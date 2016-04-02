import Transform from 'ember-data/transform'
import Ember from 'ember'

export default Transform.extend({
  deserialize(serialized) {
    return (Ember.typeOf(serialized) === 'array') ? serialized : []
  },

  serialize(deserialized) {
    var type = Ember.typeOf(deserialized)
    if (type === 'array') {
      return deserialized
    } else if (type === 'string') {
      return deserialized.split(',').map(function (item) {
        return Ember.$.trim(item)
      })
    } else {
      return []
    }
  }
})
