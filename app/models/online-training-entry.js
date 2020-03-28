import DS from "ember-data";
import attr from "ember-data/attr";
import { belongsTo } from "ember-data/relationships";

export default DS.Model.extend({
  title: attr("string"),
  brief: attr("string"),
  description: attr("string"),
  is_priced: attr("boolean"),
  organizer: attr("string"),
  categories: attr("array")
});
