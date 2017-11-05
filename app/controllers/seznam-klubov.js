import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend(Ember.GoogleAnalyticsTrackingMixin, {
  category: 'fitnes'
});
