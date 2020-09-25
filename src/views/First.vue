<template>
  <div class="first">
    <h2>First page</h2>
    <FirstComponent />
  </div>
</template>

<script>
import FirstComponent from "@/components/pagesComps/FirstComponent.vue";
export default {
  name: "First",
  components: {
    FirstComponent
  }
};
</script>
