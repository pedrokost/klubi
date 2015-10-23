import Ember from 'ember';
import Prerenderable from 'zatresi/mixins/after-render-prerenderable';

export default Ember.Route.extend(Prerenderable, {
  titleToken: 'Članki, novice in novosti',
  headTags: [{
    type: 'meta',
    tagId: 'meta-description',
    attrs: {
      name: 'description',
      content: 'Agregator novic športnih klubov, športnih prireditev in novosti v Sloveniji.'
    }
  }],
  model() {
    return this.store.findAll('clanek');
  }
});
