$(document).ready(function () {

  // confirmations
  $('.confirm').submit(function (e) {
    e.preventDefault();
    var self = this;
    var msg = 'Are you sure?';
    bootbox.confirm(msg, 'cancel', 'Yes! I am sure', function (action) {
      if (action) {
        $(self).unbind('submit');
        $(self).trigger('submit');
      }
    });
  });

  $('#tags').tagsInput({
    'height':'60px',
    'width':'280px'
  });

  $('#slider .featured-image').each(function(idx,item){
    $(item).css('background:'+item.src+' no-repeat center;');
  });

  $('#slider .flex-slider').flexslider({
    animation:'slide',
    controlsContainer: '#slider',
    animationLoop:true,
    slideshow:true,
    slideshowSpeed:5000,
    animationSpeed:600
  });

});
