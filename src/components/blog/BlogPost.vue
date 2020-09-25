<template>
  <div
    class="post-box text-left p-4 bg-light shadow position-relative rounded mb-5"
  >
    <span
      class="post-views position-absolute rounded-lg bg-success text-light font-weight-bolder"
      >{{ views }}</span
    >
    <h3 class="post-title text-dark" v-bold>{{ title }}</h3>
    <span class="post-date text-black-50 d-block pt-1 pb-2">{{ date }}</span>
    <p class="post-content text-dark">
      {{ content | shor(200, " ..More") }}
    </p>
    <div class="row">
      <div class="col-sm">
        <span class="post-author bg-primary text-light rounded-lg">{{
          author
        }}</span>
      </div>
      <div class="col-sm text-right">
        <span class="post-category bg-danger text-light rounded-lg">
          {{ category | rev }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["views", "title", "date", "content", "author", "category"],
  name: "Post"
};
</script>

<style lang="scss" scoped>
.post-views {
  top: 20px;
  right: 20px;
  padding: 5px 10px;
}
.post-date {
  font-size: 13px;
}
.post-content {
  line-height: 1.7;
  opacity: 0.7;
}
.post-author,
.post-category {
  padding: 5px 10px;
}
</style>
