import "./app4.css";
import $ from "jquery";

const $circle = $("#app4 .circle");

$circle
  .on("mouseover", (e) => {
    // console.log("enter");
    $circle.addClass("active");
  })
  .on("mouseout", (e) => {
    // console.log("out");
    $circle.removeClass("active");
  });
