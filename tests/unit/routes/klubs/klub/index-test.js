import { module, test } from 'qunit';
import { setupTest } from "ember-qunit";

module("Unit | Route | klubs/klub/index", function(hooks) {
  setupTest(hooks);

  test("it exists", function(assert) {
    var route = this.owner.lookup("route:klubs/klub/index");
    assert.ok(route);
  });
});
