import HighlightedIcon from './highlighted-icon';
import Ember from 'ember';
import MarkerLayer from 'ember-leaflet/layers/marker';
import PopupMixin from 'ember-leaflet/mixins/popup';

MarkerLayer.reopen({
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

export default MarkerLayer.extend(PopupMixin, {
  popupContent: Ember.computed('content.name', function() {
    return this.get('content.name');
  }),

  popupOptions: Ember.computed('icon', function() {
    // FIXME: This is not a good way to set the popup offset for differently
    // sized icons
    let iconOpts = this.get('icon').options;
    let offset = iconOpts.iconSize[1] + 13;
    return {
      closeButton: false,
      offset: L.point(0, -offset)
    }
  }),

  icon: Ember.computed('content.isHovered', 'isActive', function(){
    if (this.get('content.isHovered') || this.get('isActive')) {
      return new HighlightedIcon();
    } else{
      return new L.Icon.Default();
    }
  }),

  click: function() {
    this.get('controller').sendAction('showKlub', this.get('content'));
  },
  mouseover: function(e) {
    this.openPopup();
    this.set('content.isHovered', true);
  },
  mouseout: function(e) {
    this.closePopup();
    this.set('content.isHovered', false);
  }
});
