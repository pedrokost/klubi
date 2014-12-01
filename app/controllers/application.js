import Ember from 'ember';

export default Ember.ArrayController.extend({

  itemController: 'klub',
  zoom: 8,
  center: L.latLng(46.122636,14.81546), // Slivna, Slovenia,
  // hoveredKlub: null,
  // hoveredMarker: null,
  // markers: null,

  // layers: function(){
  //   return this.map(function(klub){
  //     return {
  //       location: klub.get('latlng'),
  //       id: klub.get('id'),
  //       // icon: new L.Icon.Default()
  //     };
  //   }.bind(this));
  // }.property('@each.latlng'),

  isShowPage: function() {
    return this.get('currentPath') === 'klub';
  }.property('currentPath'),

  actions: {

    // highlightKlub: function(klubId) {
    //   var item = this.findBy('id', klubId);
    //   var marker = this.get('layers').findBy('id', klubId);

    //   // TODO
    //   // layer.setIcon(new HighlightedIcon())

    //   this.set('hoveredKlub', item);
    //   // this.set('hoveredMarker', marker)
    // },

    // unHighlightKlub: function() {
    //   this.set('hoveredKlub', null);
    //   // this.get('hoveredMarker').setIcon(new L.Icon.Default());  // TODO
    //   // this.set('hoveredMarker', null);
    // },

    showKlub: function (klubId) {
      this.transitionToRoute('klub', klubId);
    }
  }
});

