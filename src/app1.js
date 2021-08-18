import "./app1.css";
import $ from "jquery";

// console.log($);

const $out = $(".output>span");
const $add1 = $("#add1");
const $minus1 = $("#minus1");
const $mul2 = $("#mul2");
const $divide2 = $("#divide2");

const key = "app1.n";
let out = localStorage.getItem(key) || 0;
$out.text(out);

$add1.on("click", (e) => {
  out = parseFloat(out) + 1;
  $out.text(out);
  localStorage.setItem(key, out);
});
$minus1.on("click", (e) => {
  out = parseFloat(out) - 1;
  $out.text(out);
  localStorage.setItem(key, out);
});
$mul2.on("click", (e) => {
  out = parseFloat(out) * 2;
  $out.text(out);
  localStorage.setItem(key, out);
});
$divide2.on("click", (e) => {
  out = parseFloat(out) / 2;
  $out.text(out);
  localStorage.setItem(key, out);
});
