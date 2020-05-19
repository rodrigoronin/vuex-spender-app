<template>
  <div id="app">
    <Header />
    <Spender />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Spender from "./components/Spender";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Spender,
  },
};
</script>

<style lang="scss">
body {
  background-color: #f1f2f3;
  color: #333;
  font-weight: bold;
  font-size: 30px;
  padding: 0;
  margin: 0;

  #app {
    -webkit-font-smoothing: antialiased;
    text-align: center;
  }
}
</style>
