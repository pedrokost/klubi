## Module Report
### Unknown Global

**Global**: `Ember.GoogleAnalyticsTrackingMixin`

**Location**: `app/components/klub-list.js` at line 3

```js
import Ember from "ember";

export default Ember.Component.extend(Ember.GoogleAnalyticsTrackingMixin, {
  tagName: "section",
  classNames: ["klub-list"],
```

### Unknown Global

**Global**: `Ember.Inflector`

**Location**: `app/initializers/inflector.js` at line 4

```js

export function initialize() {
  var inflector = Ember.Inflector.inflector;
  inflector.irregular('clanek', 'clanki');
}
```

### Unknown Global

**Global**: `Ember.Handlebars`

**Location**: `app/helpers/mail-to.js` at line 4

```js

export default Ember.Helper.helper(function (emailAddress, label) {
  emailAddress = Ember.Handlebars.Utils.escapeExpression(emailAddress);
  label = (arguments.length == 2) ? emailAddress : Ember.Handlebars.Utils.escapeExpression(label);
  // TODO: If block given, label = yield
```

### Unknown Global

**Global**: `Ember.Handlebars`

**Location**: `app/helpers/mail-to.js` at line 5

```js
export default Ember.Helper.helper(function (emailAddress, label) {
  emailAddress = Ember.Handlebars.Utils.escapeExpression(emailAddress);
  label = (arguments.length == 2) ? emailAddress : Ember.Handlebars.Utils.escapeExpression(label);
  // TODO: If block given, label = yield
  // TODO: allow passing the subject
```

### Unknown Global

**Global**: `Ember.GoogleAnalyticsTrackingMixin`

**Location**: `app/controllers/klubs.js` at line 4

```js
import ENV from "../config/environment";

export default Ember.Controller.extend(Ember.GoogleAnalyticsTrackingMixin, {
  map: Ember.inject.service(),
  zoom: 8,
```

### Unknown Global

**Global**: `Ember.GoogleAnalyticsTrackingMixin`

**Location**: `app/controllers/seznam-klubov.js` at line 3

```js
import Ember from 'ember';

export default Ember.Controller.extend(Ember.GoogleAnalyticsTrackingMixin, {
  category: 'fitnes'
});
```

### Unknown Global

**Global**: `Ember.GoogleAnalyticsTrackingMixin`

**Location**: `app/controllers/embeds/categoryklubs.js` at line 3

```js
import Ember from "ember";

export default Ember.Controller.extend(Ember.GoogleAnalyticsTrackingMixin, {
  application: Ember.inject.controller("application"),
  map: Ember.inject.service(),
```

### Unknown Global

**Global**: `Ember.K`

**Location**: `tests/helpers/flash-message.js` at line 4

```js
import FlashObject from 'ember-cli-flash/flash/object';

const { K } = Ember;

FlashObject.reopen({ init: K });
```
