$(document).ready(function() {
  var $gallery = $("#gallery").lightGallery({
    thumbnail: false,
    selector: '.image'
  });
});

// init isotope
var $grid = $("#gallery").isotope({
    percentPosition: true,
    columnWidth: "#gallery-sizer",
    itemSelector: ".image-wrapper",
    layoutMode: "masonry",
    masonry: {
        gutter: 10
    }
});

// layout Isotope after each image loads
//$grid.imagesLoaded().progress(function() {
//  $grid.masonry();
//});
