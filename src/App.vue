<template>
  <div id="app">
    <Header />
    <Spender />
  </div>
</template>

<script>
import Header from "./components/Header";
import Spender from "./components/Spender";

export default {
  name: "App",
  components: {
    Header,
    Spender,
  },
};
</script>

<style lang="scss">
#app {
  background-color: #f1f2f3;
  -webkit-font-smoothing: antialiased;
  text-align: center;
}
</style>
