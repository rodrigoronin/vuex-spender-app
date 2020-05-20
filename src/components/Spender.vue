<template>
  <div class="main">
    <div class="person">
      <img src="./../assets/images/tony_stark.png" alt="Tony Stark" />
      <h1>Spend Tony Stark' Money</h1>
    </div>
    <div class="person-money">
      {{ `$${getParsedMoney} left` }}
    </div>
    <ListItems />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListItems from "./ListItems";
export default {
  name: "Spender",
  components: {
    ListItems,
  },
  data() {
    return {};
  },
  computed: mapGetters(["getParsedMoney"]),
};
</script>

<style lang="scss" scoped>
.main {
  max-width: 950px;
  margin: 0 auto;
  .person {
    padding: 1em;
    margin-bottom: 10px;
    background-color: $pure-white;
    font-size: 20px;

    img {
      margin: 1em 0;
      max-width: 100%;
      width: 125px;
      border-radius: 50%;
    }
  }
  .person-money {
    z-index: 10;
    padding: 0.5em 0;
    margin-bottom: 10px;
    background-color: $sea-green;
    font-size: 32px;
    color: $pure-white;
    font-weight: bold;
    top: 0;
    position: sticky;
  }
}
</style>
