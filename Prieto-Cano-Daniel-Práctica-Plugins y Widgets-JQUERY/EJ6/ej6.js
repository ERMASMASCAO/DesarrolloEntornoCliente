(function($){
  $.fn.animar=function(){
    $(this).boxSlider({
      autoControls: true,
      auto: true,
      pager: true,
      slideWidth: 800,
      mode: 'fade',
      captions: true,
      speed: 1000
    });
  };
})(jQuery);
$(function() {
  $( "#ccordion" ).accordion();
});

$(document).ready(function() {
  $('#slider div').animar();
});
