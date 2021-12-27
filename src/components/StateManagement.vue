<template>
  <div class="state">
    <h3>StateManagement</h3>
    <br />
    <ul>
      <li v-for="product in products" :key="product">
        <span class="name">{{ product.name }}</span>
        <span class="price">$ {{ product.price }}</span>
      </li>
    </ul>
    <br />
    <div >
    <div :style="{color:$store.state.colorcode}" class="count">{{ $store.state.counter }}</div>
    <button @click="$store.commit('decrasecounter')">-</button>
    <button @click="$store.commit('incrasecounter')">+</button>
    </div>
    <br>
    <div>
      <input v-model="$store.state.colorcode" placeholder="colorname" type="text">
    </div>
     
  </div>
</template>
<script>
export default {
  name: "StateManagement",
 
  computed: {
    products() {
      return this.$store.state.products;
    },
  },

};
</script>

<style scoped>
div {
  margin-bottom: 10px;
  
}
.count {
  font-size: 40px;
}
button {
  width: 50px;
  margin: 0 10px;
  padding: 5px;
  background-color: seashell;
  outline: none;
  border-radius: 5px;
  
}
</style>
