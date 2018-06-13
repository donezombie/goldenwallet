$(document).ready(function(){
  $('a[href^="#searcharea"]').on('click', function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
});
