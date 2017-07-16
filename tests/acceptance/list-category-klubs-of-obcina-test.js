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
    assert.equal(find(".klub-list .js-klub-card").length, 3);
  });
});

test("should include 'Registriraj klub' button", function(assert) {
  assert.expect(1);

  let obcina = server.create("obcina", { klubs: [] });

  visit(`/obcina/${obcina.id}/fitnes`);

  andThen(function() {
    assert.ok(find(".js-add-klub-btn").text().includes("Registriraj klub"));
  });
});

test("it include other available categories", function(assert) {
  assert.expect(1);

  let obcina = server.create("obcina", { klubs: [] });

  visit(`/obcina/${obcina.id}/fitnes`);

  andThen(function() {
    assert.equal(find(".js-category-card").length, 9);
  });
});

test("it includes a list of neighboring obcinas", function(assert) {
  assert.expect(1);

  let obcina1 = server.create("obcina", { klubs: [] });
  let obcina2 = server.create("obcina", { klubs: [] });
  let obcina3 = server.create("obcina", {
    klubs: [],
    neighbouringObcinas: [obcina1, obcina2]
  });

  visit(`/obcina/${obcina3.id}/fitnes`);

  andThen(function() {
    assert.equal(find(".js-neighbouring-obcina-link").length, 2);
  });
});
