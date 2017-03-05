import Ember from 'ember';
import EmbeddedJsonapiRecordsMixin from 'klubi/mixins/embedded-jsonapi-records';
import { module, test } from 'qunit';

module('Unit | Mixin | embedded jsonapi records');

// Replace this with your real tests.
test('it works', function(assert) {
  let EmbeddedJsonapiRecordsObject = Ember.Object.extend(EmbeddedJsonapiRecordsMixin);
  let subject = EmbeddedJsonapiRecordsObject.create();
  assert.ok(subject);
});
