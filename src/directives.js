import Vue from "vue";

Vue.directive("bold", {
  bind: function(el) {
    el.style.fontWeight = "bold";
  }
});

Vue.directive("format", {
  bind: function(el, binding) {
    el.style.fontSize = binding.value + "px";
    console.log(binding.name);
    console.log(binding.value);
    if (binding.modifiers.decoration) {
      el.style.textDecoration = "line-through";
    }
    if (binding.modifiers.spacing) {
      el.style.letterSpacing = "5px";
    }
  }
});
