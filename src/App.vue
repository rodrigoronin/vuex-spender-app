<template>
  <div id="app">
    <Header />
    <Spender />
    <!-- <ShoppingCart  /> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "./components/Header";
import Spender from "./components/Spender";
// import ShoppingCart from "./components/ShoppingCart";

export default {
  name: "App",
  components: {
    Header,
    Spender,
    // ShoppingCart,
  },
  computed: {
    ...mapGetters(["getCartItems"]),
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
