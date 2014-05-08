jQuery(document).ready(function($) {

  window.onresize = function(event) {
    var winheight = $(window).height();


    if(window.innerWidth > window.innerHeight){
      if ($('#rotate').length) {
        return;
      } else {
        $('body').prepend('<div id="rotate" style="width:100%; height:' + winheight + 'px; background-color:red; z-index:2000; position:relative">Please rotate your device to portrait</div>');
      }
    } else {
      if ($('#rotate').length)  {
        $('#rotate').remove();
      } else {
        return;
      }
    }
  }
});
