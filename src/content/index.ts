import $ from "jquery";
(<any>window).jQuery = $;

import "bootstrap";

$(function () {
  $('[data-toggle="popover"]').popover();
  console.log("im alive");
  //$('[data-toggle="popover"]').click(function(){});
});