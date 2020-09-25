<template>
  <div class="about">
    <h1>{{ pName }}</h1>
    <p>{{ pDes }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pName: "About Us",
      pDes: "This is about page"
    };
  },
  name: "About"
};
</script>
