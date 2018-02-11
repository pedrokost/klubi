import { test } from "qunit";
import moduleForAcceptance from "klubi/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | potrdi klub data");

test("Rejecting klub data", function(assert) {
  assert.expect(1);
  let klub = server.create("klub", { categories: ["football"] });

  visit(`/football/${klub.id}/potrdi/1234`);
  click("button[data-test-no]");

  andThen(function() {
    assert.equal(currentURL(), `/football/${klub.id}/uredi`);
  });
});

test("Confirming klub data", function(assert) {
  assert.expect(2);
  let klub = server.create("klub", { categories: ["football"] });

  visit(`/football/${klub.id}/potrdi/1234`);
  click("button[data-test-yes]");

  andThen(function() {
    assert.equal(currentURL(), `/football/${klub.id}`);
    assert.ok(
      find(".alert")
        .text()
        .includes("Hvala, da ste preverili podatke o klubu")
    );
  });
});

test("Confirmation code no longer valid", function(assert) {
  assert.expect(2);
  let klub = server.create("klub", { categories: ["football"] });

  visit(`/football/${klub.id}/potrdi/invalid-code`);
  click("button[data-test-yes]");

  andThen(() => {
    assert.ok(
      find(".alert.alert-error")
        .text()
        .includes("Potrjevanje podatkov s to kodo ni več možno.")
    );
    assert.equal(currentURL(), `/football/${klub.id}`);
  });
});
