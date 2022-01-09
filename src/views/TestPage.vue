<template>
  <div class="test">
    <h2>show - hide</h2>
    <form action="">
      <input :type="fieldType" placeholder="Type Your Password" />
      <button @click.prevent="switchField">show - hide</button>
    </form>

    <div class="asd">
      <h2>toggl the class</h2>
      <button @click="toggleAdvanced($event, 'selected')">1</button>
      <button @click="toggleAdvanced($event, 'selected')">2</button>
      <button @click="toggleAdvanced($event, 'selected')">3</button>
    </div>
 
  </div>
</template>
<script>
export default {
  name: "TestPage",
  data() {
    return {
      fieldType: "password",
    };
  },
  methods: {
    switchField() {
      this.fieldType = this.fieldType === "password" ? "text" : "password";
    },
    toggleAdvanced: function (event, theClass) {
      event.target.classList.toggle(theClass);
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
}

input {
  padding: 0 15px;
  height: 46px;
  background-color: #efefef;
  border: 1px solid #ccc;
}
button {
  height: 48px;
  border-color: transparent;
  padding: 5px 10px;
  background-color: #2196f3;
  color: #fff;
  cursor: pointer;
  margin-top: 15px;
}
.selected {
  background-color: red;
}

.asd button {
  width: 100px;
  padding: 10px 20px;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 50px;
  margin-right: 10px;
}
h2 {
  margin-top: 100px;
}
</style>
