<template>
  <div class="sidebar-widgets">
    <p v-format.decoration.spacing="16" v-bold v-lighter>{{ title | upper }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Blog sidebar widgets"
    };
  },
  name: "Blog_sidebar",
  filters: {
    upper: function(v) {
      return v.toUpperCase();
    }
  },
  directives: {
    lighter: {
      bind: function(el) {
        el.style.fontWeight = "lighter";
      }
    }
  }
};
</script>
