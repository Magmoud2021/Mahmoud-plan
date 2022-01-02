<template>
  <div class="lifecycle">
    <img src="../assets/logo.png" alt="">
    <p>this is vue life cycle hooks alerts</p>
  </div>
</template>

<script>
export default {
  name: "LifeCycle",
  beforeCreate() {
    alert("beforeCreate");
  },
  created() {
    alert("created");
  },
  beforeMount() {
    alert("beforeMount");
  },
  mounted() {
    alert(" mounted");
  },
  beforeUpdate() {
    alert(" beforeUpdate");
  },
  updated() {
    alert(" updated");
  },
  beforeDestroy() {
    alert("  beforeDestroy");
  },
  destroyed() {
    alert("destroyed");
  },
};
</script>
