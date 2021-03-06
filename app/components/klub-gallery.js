import $ from "jquery";
import { computed } from "@ember/object";
import Component from "@ember/component";

export default Component.extend({
  classNames: "klub-gallery",

  filteredImages: computed("images", function() {
    // Leave only the first profile_photo, and all the photos

    let photos = this.images.filterBy("type", "photo");

    let profilePhotos = this.images.filterBy("type", "profile_photo");

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
      $(".klub_page").css({ overflow: "hidden" });
      photoSwipe.actions.open({ index: index });
    },
    galleryClosed() {
      $(".klub_page").css({ overflow: "auto" });
    }
  }
});
