<template>
  <div class="our-help">
    <h1>{{ pName }}</h1>
    <p>{{ pDes }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
      accusamus.
    </p>
    <HelpTrain />
  </div>
</template>

<script>
// @ is an alias to /src
import HelpTrain from "@/components/helpComps/HelpTrain.vue";

export default {
  data: function() {
    return {
      pName: "Help",
      pDes: "This is help page"
    };
  },
  name: "Help",
  components: {
    HelpTrain
  }
};
</script>
