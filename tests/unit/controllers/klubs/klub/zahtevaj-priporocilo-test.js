import { moduleFor, test } from "ember-qunit";

moduleFor(
  "controller:klubs/klub/zahtevaj-priporocilo",
  "Unit | Controller | klubs/klub/zahteval priporocilo",
  {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
    needs: ["service:scheduler", "service:router-scroll", "service:flashMessages"]
  }
);

// Replace this with your real tests.
test("it exists", function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
