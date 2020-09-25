<template>
  <div class="blog">
    <h1>{{ pName }}</h1>
    <p>{{ pDes }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPosts
              v-for="post in posts"
              :key="post.id"
              :views="post.views"
              :title="post.title"
              :date="post.date"
              :content="post.content"
              :author="post.author"
              :category="post.category"
            />
          </div>
        </div>
        <div class="col-md">
          <div class="sidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPosts from "@/components/blog/BlogPost";
import BlogSidebar from "@/components/blog/BlogSidebar";
import PostsApi from "../json/BlogPosts";

export default {
  data: function() {
    return {
      pName: "Blog",
      pDes: "This is blog page",
      posts: PostsApi
    };
  },
  name: "Blog",
  components: {
    BlogPosts,
    BlogSidebar
  }
};
</script>
