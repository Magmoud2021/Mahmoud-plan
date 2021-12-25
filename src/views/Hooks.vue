<template>
  <div class="our-help">
    <h1>Hooks</h1>
    <life-cycle />

    <img alt="Vue logo" src="../assets/22.jpg" />
    <h3>componenet test</h3>
    <CompBrops :name="name" :titel="Titel" :phone="phone" :onarray="carss" />
  </div>
</template>

<script>
import LifeCycle from "../components/LifeCycle.vue";
import CompBrops from "../components/CompBrops.vue";

export default {
  components: { LifeCycle, CompBrops },
  name: "Hooks",
  data() {
    return {
      name: "mahmoud",
      Titel: "maddi",
      phone: 115511,
      carss: ["mahmoud", "salah", "saadi"],
    };
  },
};
</script>

<style>
img {
  width: 100px;
  height: 100px;
}
</style>
