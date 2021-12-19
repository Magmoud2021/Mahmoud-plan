<template>
  <div class="header">
    <div class="logo">MAhmoudsalah</div>
    <ul >
      <router-link tag="li" exact to="/">
        <a>Home</a>
      </router-link>
      <router-link tag="li" to="/about">
        <a>About</a>
      </router-link>
      <router-link tag="li" to="/help">
        <a>Help</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #333;
  color: #fff;
  overflow: hidden;
  
}

.logo {
  font-size: 24px;
  color: #fff;
  padding: 15px;
  float: left;
  width: 200px;
  font-family: Arial, Helvetica, sans-serif;
}

ul {
  float:left ;
  width:calc(100% - 200px);
  

}
li {
  padding: 20px;
  display: inline-block;
}
a {
    color: #fff;
    text-decoration: none;

}
</style>
