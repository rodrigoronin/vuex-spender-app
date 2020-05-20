<template>
  <div class="main container-fluid">
    <ul>
      <li v-for="item in getCartItems" :key="item.Name">{{ item.Name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ShoppingCart",
  computed: { ...mapGetters(["getCartItems"]) },
};
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  background-color: $grey;
  background: $pure-white;
  padding: 0.8em;
  font-size: 16px;
  bottom: 0;
  position: sticky;
  margin-top: 10px;
  color: $pure-black;
}
</style>
