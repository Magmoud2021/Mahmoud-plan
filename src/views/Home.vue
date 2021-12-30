<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Built-in Directives" />
    <br />
    <BuiltinDirectives />
    <br />

    <ComCommunication
      :name="firstName"
      :phone="number"
      :myarray="cars"
      :myobject="mahmoud"
      :age="age"
      @mahmoud="writeName"
    />
    <br />
    <StateManagement />
   
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BuiltinDirectives from "@/components/BuiltinDirectives.vue";
import ComCommunication from "@/components/ComCommunication.vue";
import StateManagement from "@/components/StateManagement.vue";


export default {
  name: "Home",
  methods: {
    writeName(childName) {
      console.log(childName);
    },
  },
  data() {
    return {
      firstName: "mahmoud",
      number: 100,
      cars: ["1", "2", "3"],
      mahmoud: { id: 1 },
      age: 32,
    };
  },

  components: {
    HelloWorld,
    BuiltinDirectives,
    ComCommunication,
    StateManagement,
    
  },
};
</script>
<style scoped>
button {
  width: 100px;
  padding: 10px;
  margin: 0 10px;
}
</style>
