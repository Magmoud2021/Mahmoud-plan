<template>
  <div id="home">
    <h3>Make a simple list</h3>
    <ul class="lis">
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>
    <h3>list of object</h3>
    <ul>
      <li v-for="(value, name, index) in saymahmouds" :key="index">
        {{ index }} - {{ name }} : {{ value }}
      </li>
    </ul>
    <br />

    <h3>v-if</h3>

    <div v-if="count > 10">Count is greater than 10</div>
    <div v-else-if="count == 10">Count is 10</div>
    <div v-else>Count is less than 10</div>
    <br />
    <h3>v-show</h3>
    <p>{{ show }}</p>
    <div v-show="show">show div</div>
    <div v-show="!show">hide div</div>
    <br />
    <h3>change class conditionally</h3>
    <p :class="nameColor ? 'red-class' : 'blue-class'">mahmoud</p>
    <p :class="nameColor ? 'blue-class' : 'red-class'">mahmoud</p>
    <br />

    <h3>Call a function on button click</h3>
    <button @click="addFunc()">Add 1</button>
    <p>
      The button above has been clicked <b>{{ counter }} </b>times.
    </p>
  </div>
</template>

<script>
export default {
  name: "home",

  data() {
    return {
      items: [{ message: "html" }, { message: "css" }, { message: "vue js" }],

      skills: ["html", "css", "js", "vue js"],

      counter: 0,
      count: 10,
      show: true,
      nameColor: true,
      saymahmouds: {
        id: 1,
        testname: "mahmoud",
        testresult: "80%",
      },
    };
  },
  methods: {
    addFunc() {
      this.counter += 1;
    },
  },
};
</script>

<style>
.lis {
  font-family: sans-serif;
  border: 2px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
  box-sizing: border-box;
}
.red-class {
  color: red;
}
.blue-class {
  color: blue;
}
</style>
