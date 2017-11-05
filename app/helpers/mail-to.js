import { htmlSafe } from '@ember/string';
import { helper } from '@ember/component/helper';
import Ember from "ember";

export default helper(function (emailAddress, label) {
  emailAddress = Ember.Handlebars.Utils.escapeExpression(emailAddress);
  label = (arguments.length == 2) ? emailAddress : Ember.Handlebars.Utils.escapeExpression(label);
  // TODO: If block given, label = yield
  // TODO: allow passing the subject
  var link = '<a href="mailto:' + emailAddress + '">' + label + '</a>';
  return new htmlSafe(link);
});
