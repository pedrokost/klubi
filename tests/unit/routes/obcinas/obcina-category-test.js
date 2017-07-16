import { moduleFor, test } from "ember-qunit";

moduleFor(
  "route:obcinas/obcina-category",
  "Unit | Route | obcinas/obcina category",
  {
    // Specify the other units that are required for this test.
    needs: ["service:asset-map"]
  }
);

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
