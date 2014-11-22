import DS from 'ember-data';
import config from '../config/environment';

export default DS.ActiveModelAdapter.extend({
  host: config.host,
  // namespace: 'v2'
  // TODO: add accept header
  headers: {
    'Accept': 'application/vnd.zatresi.v1'
    // TODO: add API_KEY
  }
});
