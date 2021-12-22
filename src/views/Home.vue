<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Built-in Directives" />
    <br />
    <BuiltinDirectives />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BuiltinDirectives from "@/components/BuiltinDirectives.vue";

export default {
  name: "Home",

  components: {
    HelloWorld,
    BuiltinDirectives,
  },
};
</script>
