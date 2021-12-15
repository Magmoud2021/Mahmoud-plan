<template>
  <div class="bind">
    <div>text input: {{ value }}</div>
    <br />
    <div>radio input: {{ radio }}</div>
    <br />
    <div v-show='divOne'>div 1: {{ divOne }}</div>
    <div v-show='divTwo'>div 2: {{ divTwo }}</div>

    <form>
      <input type="text" v-model="value" /><br />
      <input value="vue" id="vue" type="radio" v-model="radio" />
      <label for="vue">vue</label>
      <input value="html" id="html" type="radio" v-model="radio" />
      <label for="html">html</label><br />

      <input value="divOne" id="divOne" type="radio" v-model="divOne" />
      <label for="divOne">divOne</label><br />
      <input value="divTwo" id="divTwo" type="radio" v-model="divTwo" />
      <label for="divTwo">divTwo</label>
    </form>
  </div>
</template>

<script>
export default {
  name: "Bind",
  data() {
    return {
      value: "",
      radio: "",
      divOne: "",
      divTwo: "",
    };
  },
};
</script>
