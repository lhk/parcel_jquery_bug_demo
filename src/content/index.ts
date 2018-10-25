import jquery from "jquery";
(<any>window).$ = (<any>window).jQuery = jquery;
import "bootstrap";

$(function () {
  $('[data-toggle="popover"]').popover();
  console.log("im alive");
});