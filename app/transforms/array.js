import $ from 'jquery';
import { typeOf } from '@ember/utils';
import Transform from 'ember-data/transform'

export default Transform.extend({
  deserialize(serialized) {
    return (typeOf(serialized) === 'array') ? serialized : [];
  },

  serialize(deserialized) {
    var type = typeOf(deserialized)
    if (type === 'array') {
      return deserialized
    } else if (type === 'string') {
      return deserialized.split(',').map(function (item) {
        return $.trim(item);
      });
    } else {
      return []
    }
  }
})
