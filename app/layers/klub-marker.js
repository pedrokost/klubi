import HighlightedIcon from './highlighted-icon';
import Ember from 'ember';

EmberLeaflet.MarkerLayer.reopen({
  didCreateLayer:function(){
    this._updateLayerOnIconChange();
  },
  _updateLayerOnIconChange: Ember.observer(function(){
     // console.log('icon changed: update leaflet icon');
     var newIcon = Ember.get(this, 'icon');
     var oldIcon = this._layer && this._layer.options.icon;
     if(oldIcon && newIcon && oldIcon !== newIcon) {
       var draggable = this._layer.dragging ? this._layer.dragging.enabled() : false;
       this._layer.setIcon(newIcon);
       if(this._layer.dragging){
         if(draggable) {this._layer.dragging.enable();}
         else {this._layer.dragging.disable();}
       }
     }
   }, 'icon')
});

export default EmberLeaflet.MarkerLayer.extend({

    isHovered: Ember.computed.alias('content.isHovered'),

    icon: function(){
      if (this.get('isHovered')) {
        return new HighlightedIcon();
      } else{
        return new L.Icon.Default();
      }
    }.property('isHovered'),

    click: function() {
      this.get('controller').send('showKlub', this.content);
    },
    mouseover: function() {
      this.set('content.isHovered', true);
    },
    mouseout: function() {
      this.set('content.isHovered', false);
    }
  }
);
