import { moduleForModel, test } from "ember-qunit";

moduleForModel("obcina", "Unit | Model | obcina", {
  // Specify the other units that are required for this test.
  needs: ["service:scheduler"]
});

test("it exists", function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
