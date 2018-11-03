import { module, test } from 'qunit';
import { setupTest } from "ember-qunit";

module("Unit | Controller | klubs/klub/zahteval priporocilo", function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test("it exists", function(assert) {
    let controller = this.owner.lookup("controller:klubs/klub/zahtevaj-priporocilo");
    assert.ok(controller);
  });
});
