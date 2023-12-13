$(document).ready(function () {
  $(".item").on("click", function (event) {
    event.preventDefault();
    var target = $(this).data("target");
    var offset = $(target).offset().top;
    $("html, body").animate({ scrollTop: offset }, 800);
  });
});