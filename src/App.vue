<template>
  <div id="app">
    <router-view />
    <vue-particles color="#6FFFE9"></vue-particles>
  </div>
</template>

<style>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>

<script>
export default {
  name: "app"
};
</script>
