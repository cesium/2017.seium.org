$(document).ready(function(){
  $('.heartbits-partners-carousel').slick({
    autoplay: true,
    slidesToShow: 2
  });

  $('.project-body').hide();

            $('.project-link').click(function(e){
                 e.preventDefault();
                 var $this = $(this).parent().find('.project-body');
                 $(".project-body").not($this).hide();
                 $(".project").not($(this).parent()).removeClass("project-border");
                 $($this).toggle();
                 $(this).parent().toggleClass("project-border");

                 $(window).trigger('resize');

                 $("body, html").animate({
                     scrollTop: $( $(this).attr('href') ).offset().top
                });
            });
});
