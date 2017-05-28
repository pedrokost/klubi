import { test } from "qunit";
import moduleForAcceptance from "klubi/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | obcina index");

test("visiting /obcina should redirect to home", function(assert) {
  visit("/obcina");

  andThen(function() {
    assert.equal(currentURL(), "/fitnes");
  });
});
