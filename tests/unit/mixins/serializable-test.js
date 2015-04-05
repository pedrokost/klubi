import Ember from 'ember';
import SerializableMixin from '../../../mixins/serializable';
import { module, test } from 'qunit';

module('SerializableMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var SerializableObject = Ember.Object.extend(SerializableMixin);
  var subject = SerializableObject.create();
  assert.ok(subject);
});
