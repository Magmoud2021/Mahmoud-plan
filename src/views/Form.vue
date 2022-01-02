<template>
  <div id="form">
    <h3>vee-validate</h3>
    <FormValidation />
  </div>
</template>
<script>
import FormValidation from "../components/FormValidation.vue";
export default {
  name: "Form",
  components: {
    FormValidation,
  },
};
</script>

<style scoped>
h3 {
  margin-top: 10px;
}
</style>
