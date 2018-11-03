import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('KlubSerializer', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    var serializer = this.owner.lookup('serializer:klub');
    assert.ok(serializer);
  });
});
