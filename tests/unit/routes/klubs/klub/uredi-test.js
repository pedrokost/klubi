import { module, test } from 'qunit';
import { setupTest } from "ember-qunit";

module("Unit | Route | klubs/klub/uredi", function(hooks) {
  setupTest(hooks);

  test("it exists", function(assert) {
    var route = this.owner.lookup("route:klubs/klub/uredi");
    assert.ok(route);
  });
});
