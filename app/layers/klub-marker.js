import HighlightedIcon from './highlighted-icon';
import Ember from 'ember';

export default EmberLeaflet.MarkerLayer.extend(
  {
    icon: function(){
      console.log('will change icon');
      return new L.Icon.Default();
    }.property('isHovered', 'content.name'),

    click: function() {
      this.get('controller').send('showKlub', this.content);
    },
    mouseover: function() {
      // This sets the item controller 'isHovered' to true
      // console.log(this.get('content.isHovered'));
      // console.log('changing isHovered from', this.get('content.isHovered'), 'to true');
      this.content.send('hover', true);
    },
    mouseout: function() {
      // console.log(this.content.get('isHovered'));
      // This sets the item controller 'isHovered' to false
      // console.log('changing isHovered from', this.get('content.isHovered'), 'to false');
      this.content.send('hover', false);
    }
  }
);
