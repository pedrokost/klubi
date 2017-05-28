import { test } from "qunit";
import moduleForAcceptance from "klubi/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | root");

test("visiting /root", function(assert) {
  visit("/");

  andThen(function() {
    assert.equal(currentURL(), "/fitnes");
  });
});
