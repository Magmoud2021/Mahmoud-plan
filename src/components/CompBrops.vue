<template>
  <div id="prop">
    <p>{{ name }}</p>
    <p>{{ titel }}</p>
    <p>{{ phone }}</p>
    <p>{{ onarray }}</p>
  </div>
</template>
<script>
export default {
  name: "CompBrops",
  data() {},
  props: {
    name: {
      type: String,
    },
    titel: {
      type: String,
    },
    phone: {
      type: Number,
    },
    onarray: {
      type: Array,
    },
  },
};
</script>
