/*
//Swipebox
//Use .swipebox class
(function($) {

  $(".swipebox").swipebox();

})(jQuery);
*/

//Download Cards

function showCard(card) {
  card.addClass("flipInY").removeClass("flipOutY invisible");
}

function hideCard(card) {
  card.addClass("flipOutY").removeClass("flipInY");
}

// Nightlies
$("#nightly .btn").click(function() {
  showCard($("#nightly .card-overlay"));
});

$("#nightly .close-icon").click(function () {
  hideCard($("#nightly .card-overlay"));
});

// Pre Release
$("#prerelease .btn").click(function() {
  showCard($("#prerelease .card-overlay"));
});

$("#prerelease .close-icon").click(function () {
  hideCard($("#prerelease .card-overlay"));
});

// Stable
$("#stable .btn").click(function() {
  showCard($("#stable .card-overlay"));
});

$("#stable .close-icon").click(function () {
  hideCard($("#stable .card-overlay"));
});

/*
// Close menu after click (on mobile)
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
*/
