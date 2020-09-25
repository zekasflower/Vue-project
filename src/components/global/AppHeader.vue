<template>
  <header>
    <div class="logo">
      <h2>FajrCademy</h2>
    </div>
    <div class="container">
      <ul class="text-right">
        <router-link to="/" tag="li" exact>
          <a>Home</a>
        </router-link>
        <router-link to="/about" tag="li">
          <a>About</a>
        </router-link>
        <router-link to="/help" tag="li" replace>
          <a>Help</a>
        </router-link>
        <router-link to="/first" tag="li">
          <a>First</a>
        </router-link>
        <router-link to="/second" tag="li">
          <a>Second</a>
        </router-link>
        <router-link to="/third" tag="li">
          <a>Third</a>
        </router-link>
        <router-link to="/fourth" tag="li">
          <a>Fourth</a>
        </router-link>
        <router-link to="/blog" tag="li">
          <a>Blog</a>
        </router-link>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style scoped lang="scss">
$darkColor: #2c3e50;
$lightColor: #ecf0f1;
header {
  background-color: $darkColor;
  color: $lightColor;
  padding: 20px;
  display: flex;
  margin-bottom: 50px;
  .logo {
    font-size: 26px;
    flex: 1;
    h2 {
      margin: 0;
    }
  }
  ul {
    flex: 1;
    margin: 0;
    li {
      display: inline-block;
      padding: 10px 20px;
      a {
        color: $lightColor;
        font-size: 18px;
      }
    }
  }
}
</style>
