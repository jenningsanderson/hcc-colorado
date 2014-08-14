$(document).ready(function(){
  $('#homepage-slider').bxSlider({
    auto: true,
    captions: true,
    controls: false,
    pager: true,
    height: 300,
    adaptiveHeight: false,
    responsive: true,
    speed: 2000
  });
});

$(window).scroll(function() {
  var pos = $(this).scrollTop();

  //Stick the main scroller to the top if we pass it.
  if (pos > 155){
    $(".navbar-inner").css({"position": "fixed", "top": 0, "z-index":10 })
  }else if(pos < 155){
    $(".navbar-inner").css({"position": "absolute", "top": 155})
  }
});