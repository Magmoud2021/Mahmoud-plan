<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Welcome />
    <Bind />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";
import Bind from "@/components/Bind.vue";

export default {
  name: "about",

  components: {
    Welcome,
    Bind,
  },
};
</script>
