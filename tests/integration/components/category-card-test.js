import { find } from "@ember/test-helpers";
import EmberObject from "@ember/object";
import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | category card", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    let obcina = EmberObject.create({
      name: "Obcina 1"
    });

    let category = EmberObject.create({
      identifier: "wellness",
      name: "Wellness"
    });

    this.set("category", category);
    this.set("obcina", obcina);

    await render(hbs`{{category-card obcina=obcina category=category}}`);

    console.log(this.element);

    assert.equal(find(".card-header").textContent.trim(), "Wellness");
    assert.equal(
      find(".card-overlay").textContent.trim(),
      "Wellness v občini Obcina 1"
    );
  });
});
