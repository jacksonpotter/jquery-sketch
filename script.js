$(document).ready(function() {
  setup_sketchpad(16);
  draw('.block');

  $('button[name="reset"]').on('click',clear_grid);  
});

function draw(element) {
  $('.container').on('mouseover', element, function(){
    $(this).toggleClass('on');
  });
}

function setup_sketchpad(size) {
  var drawingarea = [];
  var block = "<div class='block'></div>"
  var block_size = 800/size;

  for (var i = 0; i < size*size; i++) {
    drawingarea.push(block);
  }

  $('.container').append(drawingarea.join(''));

  $('.block').css({
    'width': block_size,
    'height': block_size
  });
}

function clear_grid() {
  $('.container').empty();
  var size = prompt('Enter size:');
  setup_sketchpad(size);
}