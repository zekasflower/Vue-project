import Vue from "vue";

Vue.filter("rev", function(v) {
  return v
    .split("")
    .reverse()
    .join("");
});

Vue.filter("shor", function(v, l, s) {
  return v.length > 200 ? v.substring(0, l) + s : v;
});
