import { test } from "qunit";
import moduleForAcceptance from "klubi/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | submit recommendation");

test("should successfully submit a recommendation", function(assert) {
  assert.expect(2);
  let klub = server.create("klub", { categories: ["football"] });

  visit(`/football/${klub.id}/podaj-mnenje/1234`);
  fillIn("input.comment", "My new comment");
  fillIn("input.name", "Roberto");
  click("button.submit");

  andThen(() => {
    assert.equal(currentURL(), `/football/${klub.id}`);
    assert.equal(find(".alert").text(), "Hvala za komentar!");
    // TODO: assert commet is shown!
  });
});
