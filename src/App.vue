<template>
  <div class="app-container">
    <img alt="Vue logo" src="./assets/primevue-logo.png">
    <HelloWorld msg="Welcome to Your PrimeVue App"/>
    <form @submit.prevent="greet">
      <InputText type="text" v-model="text"/>
      <Button type="submit" label="Submit"/>
      <h3>{{message}}</h3>
    </form>
  </div>

  <Toast ref="toast"/>
</template>

<script>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

export default {
    components: {
      HelloWorld
    },

    setup() {
      const message = ref(null);
      const text = ref(null);
      const toast = ref(null);

      function greet() {
        toast.value.$toast.add({severity: 'info', summary: 'Hello '  + text.value});
        message.value = 'Hello ' + text.value;
      }

      return {
        message, text, toast, greet
      };
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.app-container {
  text-align: center;
}

#app .p-button {
  margin-left: .2em;
}

form {
  margin-top: 2em;
}
</style>
