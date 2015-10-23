import Ember from 'ember';
import Prerenderable from 'zatresi/mixins/after-render-prerenderable';

export default Ember.Route.extend(Prerenderable, {
  titleToken: 'O projektu',
  headTags: [{
    type: 'meta',
    tagId: 'meta-description',
    attrs: {
      name: 'description',
      content: 'Najdi najboljši fitnes, vadbeni center, karate dojo, wellness center, frizbi klub, judo dojo, gimnastično društvo v svoji bližini. Smo največja Slovenska baza fitnesov, karate klubov, judo klubov, frizbi klubov, in več!'
    }
  }, {
    type: 'link',
    tagId: 'link-canonical',
    attrs: {
      rel: 'canonical',
      content: 'http://www.zatresi.si/oprojektu'
    }
  }]
});
