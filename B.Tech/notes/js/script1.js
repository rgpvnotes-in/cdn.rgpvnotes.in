$(document).ready(function() {
  var url = $('.entry-content img').attr("src");
  var vurl = $('.entry-content iframe').attr("src");
  var vkurl = $('.entry-content iframe.entry-content img').attr("src");
  if (url) {
    $('<center><img src="' + url + '" class="first_post_img"/></center>').appendTo('.big_post_image');
    $(".entry-content img").first().remove();
  } else if (vurl) {
    $('<center class="iframe_wrapper"><iframe src="' + vurl + '" class="iframe_video" allowfullscreen="" frameborder="0" scrolling="no" /></center>').appendTo('.big_post_image');
    $(".entry-content iframe").first().remove();
  } else {
//your code
  }
});
