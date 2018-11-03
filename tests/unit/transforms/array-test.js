import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('ArrayTransform', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    var transform = this.owner.lookup('transform:array');
    assert.ok(transform);
  });
});
