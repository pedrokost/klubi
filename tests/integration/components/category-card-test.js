import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("category-card", "Integration | Component | category card", {
  integration: true
});

test("it renders", function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  let obcina = Ember.Object.create({
    name: "Obcina 1"
  });

  let category = Ember.Object.create({
    identifier: "wellness",
    name: "Wellness"
  });

  this.set("category", category);
  this.set("obcina", obcina);

  this.render(hbs`{{category-card obcina=obcina category=category}}`);

  assert.equal(this.$(".card-header").text().trim(), "Wellness");
  assert.equal(
    this.$(".card-overlay").text().trim(),
    "Wellness v občini Obcina 1"
  );
});
