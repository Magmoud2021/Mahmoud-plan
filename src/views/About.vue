<template>
  <div class="about">
    <h1>This is an about page</h1>
    <welcom />
  </div>
</template>

<script>
// @ is an alias to /src
import welcom from "@/components/welcom.vue";

export default {
  name: "about",
  components: {
    welcom,
  },
};
</script>
