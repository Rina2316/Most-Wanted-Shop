<template>
  <div id="app">
    <router-view />
    <ModalsContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'vue-final-modal/style.css';
import { ModalsContainer } from 'vue-final-modal'


export default defineComponent({
  name: 'App',
  components: { ModalsContainer },
});
</script>

<style>

html,
body,
#app {
  margin: 0 auto;
  padding: 0;
  scroll-behavior: smooth;
  height: 100%;
  max-width: 1280px;
  font-family: 'Ubuntu', sans-serif;
}

h5, h4, h3, h2, h1, p, span {
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>
