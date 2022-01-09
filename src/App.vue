<template>
  <div id="app">
    <appheader />
    <NavigationPar />
    <h3>Access http, Axios</h3>
    <ul>
      <li v-for="book in books" :key="book">
        |{{ book.name }}|{{ book.id}}
      </li>
    </ul>

    <router-view />
  </div>
</template>

<script>
import Appheader from "@/components/global/Appheader.vue";
import NavigationPar from "@/components/global/NavigationPar.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      books: [],
    };
  },
  components: {
    Appheader,
    NavigationPar,
  },
  created() {
    axios.get("https://vuango-books-api.herokuapp.com/books/").then((res) => {
      this.books = res.data;
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
