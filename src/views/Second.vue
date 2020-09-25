<template>
  <div class="second">
    <h2>Second page</h2>
    <second-component />
  </div>
</template>

<script>
import SecondComponent from "@/components/pagesComps/SecondComponent.vue";
export default {
  name: "Second",
  components: {
    SecondComponent
  }
};
</script>
