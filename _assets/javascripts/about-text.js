change_text = function(element) {
  var $words = $(element),
      $total = $words.length - 1,
      $position = 0,
      $timer = null;

  $(element).first().addClass('active');
    var autoSlide = function() {
      $words.removeClass('active');
      if ($position === $total) {
        $position = 0;
      } else {
        $position = $position + 1;
      }
      $words.eq($position).addClass('active');
    };
    $timer = setInterval(autoSlide, 3000);
};


$(document).ready(function() {
  change_text('.change-text span');
});
