import Ember from "ember";

export default Ember.Component.extend({
  classNames: "klub-gallery",

  filteredImages: Ember.computed("images", function() {
    // Leave only the first profile_photo, and all the photos

    let images = this.get("images");

    let photos = images.filterBy("type", "photo");

    let profilePhotos = images.filterBy("type", "profile_photo");

    if (profilePhotos.length) {
      photos.unshift(profilePhotos[0]);
    }
    return photos.map(photo => {
      return {
        src: photo.get("large.url"),
        w: photo.get("large.width"),
        h: photo.get("large.height"),
        msrc: photo.get("thumbnail.url")
      };
    });
  }),

  actions: {
    openGallery(photoSwipe, index) {
      photoSwipe.actions.open({ index: index });
      Ember.$(".klub_page").css({ overflow: "hidden" });
    },
    galleryClosed() {
      Ember.$(".klub_page").css({ overflow: "auto" });
    }
  }
});
