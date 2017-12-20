/*POPUP CONTROL
* <div class=".popup-mask">
*      <div class=".popupclassname .popup">POPUP</div>
* </div>
* <a rel="popupclassname" class="js-pop">POPUP TRIGGER</a>
* 
*/

/*if (jQuery('.popup-mask').length) {
  jQuery('.popup-mask').hide();

  jQuery(document).on('click', '.js-pop', function() {
    popcont = this.rel;
    jQuery('.popup-mask').fadeIn();
    jQuery('.popup').hide();
    jQuery('.' + popcont).show();
  });

  // close pop-up button
  jQuery('.popup').on('click', '.js-close', function() {
    jQuery(this).closest('.popup-mask').fadeOut();
  });
}*/

function check_pop_ht() {
  var window_ht,
      pop_wrap_ht;

  window_ht = $(window).height();
  pop_cont_ht = $('.popup-wrap').height();

  if (pop_cont_ht > window_ht) {
    $('.popup-container').css({
      'height' : '100%'
    });
    enquire.register("screen and (min-width: 500px)", {
      match : function() {
        $('.popup-container').perfectScrollbar();
      },
      unmatch : function() {
        $('.popup-container').perfectScrollbar('destroy');
      }
    });
  }
  else {
    $('.popup-container').css({
      'height' : 'auto'
    });
  }
}

// show popup "popOpen(id) or popOpen()"
var pop_default_id = "popdev-target";

function popOpen(id) {
  $('.popup-mask, .popup-container, .js-close').fadeIn();
  if (id == null) {
    $('#'+pop_default_id).fadeIn();
  }
  else {
    $('#'+id).fadeIn();
  }
  check_pop_ht();
}

$(window).resize(function(){
  check_pop_ht();
});

// hide popup "popClose()"
function popClose() {

  $('#'+pop_default_id).empty();
  $('.popup-mask, .popup-container, .popup').fadeOut();
}

$(document).on('click', '.js-close', function(){
  popClose();
});