import { module, test } from 'qunit';
import { setupTest } from "ember-qunit";

module("Unit | Route | klubs/klub/zahtevaj priporocilo", function(hooks) {
  setupTest(hooks);

  test("it exists", function(assert) {
      let route = this.owner.lookup("route:klubs/klub/zahtevaj-priporocilo");
      assert.ok(route);
  });
});
