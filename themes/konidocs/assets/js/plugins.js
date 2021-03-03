// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
// Lightbox support
$('.lightbox-link').on('click', function(){
  var id = $(this).attr('data-id');
  var number = parseInt($(this).attr('data-number'));
  $("#" + id + "-modal").modal('show');
  $("#" + id + "-carousel").carousel(number);
  $carousel = $("#" + id + "-carousel")
  return false;
});
// Image hover support
$('.img-hover li').hover(function() {
  // Change image source
  var imagehover = $( this ).closest('div.img-hover').children('div').children('img').get(0);
  $(imagehover).attr('src',$(this).attr('data-src'));
  $(imagehover).attr('alt',$(this).attr('data-alt'));
  // Reset other lines
  var linklist = $( this ).closest('ul').find("li").toArray();
  $(linklist).removeAttr('class');
  // Bold current line
  $(this).attr('class','active');
});