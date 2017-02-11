$(document).ready(function() {
  var $gallery = $("#gallery").lightGallery({
    thumbnail: false,
    selector: '.image'
  });

    // init isotope
    var $grid = $("#gallery").isotope({
        percentPosition: true,
        columnWidth: "#gallery-sizer",
        itemSelector: ".image-wrapper",
        layoutMode: "masonry",
        masonry: {
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer'
        }
    });

    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(
        function() {
            $grid.isotope('layout');
        });
});
