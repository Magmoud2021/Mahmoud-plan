<template>  
  <form>
    <ValidationObserver>
      <ValidationProvider rules="required" v-slot="{ errors }">
        <label for="">name</label>
        <input v-model="alpha" type="text" />
        <p>{{ errors[0] }}</p>
      </ValidationProvider>
      <ValidationProvider name="email" rules="required|email">
        <div slot-scope="{ errors }">
          <label>Email</label>
          <input v-model="email" />
          <p>{{ errors[0] }}</p>
        </div>
      </ValidationProvider>

      <ValidationProvider rules="required|max:10" v-slot="{ errors }">
        <label for="">Phone</label>
        <input v-model="Phone" type="text" />
        <p>{{ errors[0] }}</p>
      </ValidationProvider>

      <ValidationProvider rules="required|confirmed:confirmation" v-slot="{ errors }">
        <label for="">password</label>
        <input v-model="value" type="password" />
        <p>{{ errors[0] }}</p>
      </ValidationProvider>

      <ValidationProvider v-slot="{ errors }" vid="confirmation">
        <label for=""> confirmpassword</label>

        <input v-model="confirmation" type="password" />
        <p>{{ errors[0] }}</p>
      </ValidationProvider>

      <ValidationProvider  >
      <button class="button" @click="submit">submit</button>
      </ValidationProvider>
    </ValidationObserver>
  </form>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  name: "FormValidation",
  components: {
    ValidationProvider,
  },
  data: () => ({
    value: "",
    name: "",
    Phone: "",
   confirmation:"",
  }),
    methods: {
    submit() {
      alert("On submit");
    }
  }
};
</script>
<style scoped>
form {
  width: 245px;
  height: 600px;
  margin: 30px auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 20px 5px;
  display: inline-block;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  box-sizing: border-box;
  color: black;
  outline: none;
  border: none;
}
input[type="passowrd"] {
  margin-bottom: 50px;
  padding: 10px;
}

form input[data-v-1fc1240d] {
  background-color: #c2eaf534;
  margin: 10px;
  border-radius: 4px;
  height: 25px;
  outline: none;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

.button {
  background-color: #1678898c;
  color: white;
  height: 40px;
  padding: 11px 15px;
  margin: 5px auto;
  border-radius: 5px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;}
p{
  color: red;
}
</style>
