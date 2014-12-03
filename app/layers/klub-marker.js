import HighlightedIcon from './highlighted-icon';
import Ember from 'ember';

export default EmberLeaflet.MarkerLayer.extend({
    didCreateLayer:function(){
      this._updateLayerOnIconChange();
    },
    _updateLayerOnIconChange: Ember.observer(function(){
       console.log('icon changed: update leaflet icon');
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
     }, 'icon'),

    icon: function(){
      console.log('will change icon');
      // console.debug('ahah');
      // return new L.Icon.Default();
      if (this.get('isHovered')) {
        return new HighlightedIcon();
      } else{
        return new L.Icon.Default();
      }
    }.property('isHovered', 'content.name'),

    click: function() {
      this.get('controller').send('showKlub', this.content);
    },
    mouseover: function() {
      // This sets the item controller 'isHovered' to true
      // console.log(this.get('content.isHovered'));
      console.log('changing isHovered from', this.get('isHovered'), 'to true');
      //this.content.send('hover', true);
      this.set('isHovered',true);
    },
    mouseout: function() {
      // console.log(this.content.get('isHovered'));
      // This sets the item controller 'isHovered' to false
      console.log('changing isHovered from', this.get('isHovered'), 'to false');
      //this.content.send('hover', false);
      this.set('isHovered',false);
    }
  }
);
