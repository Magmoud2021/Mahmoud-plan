<template>
  <div class="about">
    <h1>This is an about page</h1>
    <welcom />
     <Bind />
  </div>
</template>

<script>
// @ is an alias to /src
import welcom from "@/components/welcom.vue";
import Bind from "@/components/Bind.vue";

export default {
  name: "about",
  components: {
    welcom,
    Bind
  },
};
</script>
