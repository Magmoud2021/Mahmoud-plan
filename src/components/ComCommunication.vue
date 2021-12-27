<template>
  <div class="app">
    <h3>component Communication</h3>
    <p>{{ name }}</p>
    <p>{{ phone }}</p>
    <p>{{ myarray }}</p>
    <p>{{ myobject }}</p>
    <p>{{ age }}</p>
    <h3>$emit</h3>

    <button @click="fire">child name in console</button>
  </div>
</template>
<script>
export default {
  name: "ComCommunication",
  methods: {
    fire() {
      this.$emit("mahmoud", this.childName);
    },
  },
  data() {
    return {
      childName: "mahmoud salah",
    };
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    phone: {
      type: Number,
    },
    myarray: {
      type: Array,
    },
    myobject: {
      type: Object,
    },
    age: {
      type: Number,
    },
  },
};
</script>
