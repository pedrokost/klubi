import { test } from "qunit";
import moduleForAcceptance from "klubi/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | list category klubs of obcina");

test("should list all klubs", function(assert) {
  assert.expect(3);

  let klub1 = server.create("klub");
  let klub2 = server.create("klub");
  let klub3 = server.create("klub");

  let obcina = server.create("obcina", { klubs: [klub1, klub2, klub3] });

  visit(`/obcina/${obcina.id}/fitnes`);

  andThen(function() {
    assert.equal(currentURL(), `/obcina/${obcina.id}/fitnes`);
    assert.ok(find("article h1").text().includes(obcina.name));
    assert.equal(find(".klub-list-collection .js-klub-card").length, 3);
  });
});

test("should include 'Dodaj klub' button", function(assert) {
  assert.expect(1);

  let obcina = server.create("obcina", { klubs: [] });

  visit(`/obcina/${obcina.id}/fitnes`);

  andThen(function() {
    assert.ok(find(".embedded-add-klub-btn").text().includes("Dodaj klub"));
  });
});
