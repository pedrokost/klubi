import { test } from "qunit";
import moduleForAcceptance from "klubi/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | submit recommendation");

test("should successfully submit a recommendation", function(assert) {
  assert.expect(3);
  let klub = server.create("klub", { categories: ["football"] });

  visit(`/football/${klub.id}/podaj-mnenje/1234`);
  fillIn(".priporocilo-modal textarea", "My new comment");
  fillIn(".priporocilo-modal input[type=text]", "Roberto");
  click(".priporocilo-modal input[type=checkbox]");
  click(".priporocilo-modal button");

  andThen(() => {
    assert.equal(currentURL(), `/football/${klub.id}`);
    assert.ok(
      find(".alert")
        .text()
        .includes("komentar je objavljen")
    );
    assert.equal(find('p[itemprop="review"]').length, 1);
  });
});
