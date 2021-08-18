import "./app2.css";
import $ from "jquery";

const $tabbar = $("#app2 .tab-bar");
const $content = $("#app2 .content");

$tabbar.on("click", "li", (e) => {
  //   console.log(e.currentTarget);
  const $li = $(e.currentTarget);
  const index = $li.index();
  $li.addClass("selected").siblings().removeClass("selected");
  $content
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$tabbar.children().eq(0).trigger("click");
