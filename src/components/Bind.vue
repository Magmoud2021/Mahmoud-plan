<template>
  <div class="bind">
    <div class="color">text input: {{ value }}</div>
    <br />
    <form><input type="text" v-model="value" /><br /></form>
    <br />
    <hr />
    <br />
    <div>radio input: {{ radio }}</div>
    <br />

    <form action="">
      <input value="vue" id="vue" type="radio" v-model="radio" />
      <label for="vue">vue</label>
      <input value="html" id="html" type="radio" v-model="radio" />
      <label for="html">html</label><br />
    </form>
    <br />
    <hr />
    <br /><br />
    <div v-show="divOne">div 1: {{ divOne }}</div>
    <div v-show="divTwo">div 2: {{ divTwo }}</div>
    <form>
      <!-- <input value="divOne" id="divOne" type="radio" v-model="divOne" />
      <label for="divOne">divOne</label><br />
      <input value="divTwo" id="divTwo" type="radio" v-model="divTwo" />
      <label for="divTwo">divTwo</label> -->
      
    </form>
    <p>How are you feeling today?</p>
  <label>
    <input type="radio" value="great" v-model="howAreYouFeeling" />
    great
  </label>
  <label>
    <input type="radio" value="wonderful" v-model="howAreYouFeeling" />
    wonderful
  </label>
      <p>I am also feeling : <em>{{howAreYouFeeling}}</em> today.</p>
    
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
          howAreYouFeeling: "great"
    };
  },
};
</script>
<style lang="scss" scoped>
.color {
  color: orange;
}
</style>
