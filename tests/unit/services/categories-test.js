import { moduleFor, test } from "ember-qunit";

moduleFor("service:categories", "Unit | Service | categories", {
  // Specify the other units that are required for this test.
  needs: ["service:asset-map"]
});

// Replace this with your real tests.
test("it exists", function(assert) {
  let service = this.subject();
  assert.ok(service);
});
