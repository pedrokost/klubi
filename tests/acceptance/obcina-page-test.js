import { test } from "qunit";
import moduleForAcceptance from "klubi/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | obcina page");

test("should list categories with klubs", function(assert) {
  assert.expect(0);
  // assert.expect(2);
  // let klub1 = server.create("klub", { categories: ["fitnes"] });
  // let klub2 = server.create("klub", { categories: ["karate"] });
  // let klub3 = server.create("klub", { categories: ["karate"] });
  // let obcina = server.create("obcina", { klubs: [klub1, klub2, klub3] });
  // visit(`/obcina/${obcina.id}`);
  // andThen(function() {
  //   assert.equal(currentURL(), `/obcina/${obcina.id}`);
  //   assert.ok(find("article h1").text().includes(obcina.name));
  //   // TODO: complete test
  //   // return pauseTest();
  //   // In total there are 3 klubs
  //   // assert.equal(find(".klub-list .js-klub-card").length, 3);
  //   // assert.equal(
  //   //   find(".js-klub-list-section").length,
  //   //   2,
  //   //   "There should be exactly 2 sections"
  //   // );
  //   // assert.equal(
  //   //   find(".js-klub-list-section")[0].find(".js-klub-card").length,
  //   //   1
  //   // );
  //   // assert.equal(
  //   //   find(".js-klub-list-section")[1].find(".js-klub-card").length,
  //   //   2
  //   // );
  //   // TODO: each section has link to map
  // });
});

test("when category has too many klubs, link to obcina-category page", function(
  assert
) {
  assert.expect(0);
});

test("shows appropriate message when no klubs", function(assert) {
  assert.expect(2);
  let obcina = server.create("obcina", { klubs: [] });

  visit(`/obcina/${obcina.id}`);

  andThen(function() {
    assert.ok(find("article h1").text().includes(obcina.name));
    assert.ok(find(".js-no-klubs-notif"));
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

  visit(`/obcina/${obcina3.id}`);

  andThen(function() {
    assert.equal(find(".js-neighbouring-obcina-link").length, 2);
  });
});

test("should include 'Registriraj klub' button", function(assert) {
  assert.expect(1);

  let obcina = server.create("obcina", { klubs: [] });

  visit(`/obcina/${obcina.id}`);

  andThen(function() {
    assert.ok(find(".js-add-klub-btn").text().includes("Registriraj klub"));
  });
});
