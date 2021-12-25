<template>
  <div class="app">
    <h3>component Communication</h3>
    <p>{{ name }}</p>
    <p>{{ phone }}</p>
    <p>{{ myarray }}</p>
    <p>{{ myobject }}</p>
    <p>{{age}}</p>
  </div>
</template>
<script>
export default {
  name: "ComCommunication",
  data() {},
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
    age:{
      type: Number,
    }
  },
};
</script>
