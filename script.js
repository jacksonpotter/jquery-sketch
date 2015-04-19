$(document).ready(function() {
  setupSketchpad();
  $('.block').on('mouseenter', function(){
    $(this).addClass('blue');
  });
});

function setupSketchpad() {
  var block = '<div class=\'block\'></div>'
  var sketchpad = [];

  for (var i = 0; i < 256; i++) {
    sketchpad.push(block);
  }

  $('.container').append(sketchpad.join(''));
}