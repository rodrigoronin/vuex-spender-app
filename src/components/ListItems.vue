<template>
  <div class="item-container">
    <div class="item" v-for="item in getItems" :key="item.name">
      <img src="https://picsum.photos/125" alt="" />

      <div class="item-name">{{ item.Name }}</div>

      <div class="item-cost">{{ `$${numberToText(item.Cost)} ` }}</div>

      <BuySell :item="item" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BuySell from "./BuySell";
export default {
  name: "ListItems",
  components: {
    BuySell,
  },
  props: {
    parseNumber: {
      type: Function,
    },
  },
  data() {
    return {
      currentValue: 0,
    };
  },
  computed: mapGetters(["getItems"]),
  methods: {
    numberToText(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style lang="scss" scoped>
.item-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  background-color: $grey;

  .item {
    background-color: $white;
    max-width: 100%;
    font-size: 20px;
    padding: 20px 0;

    *:not(.item-name) {
      padding: 5px;
    }

    .item-cost {
      color: $sea-green;
    }
  }
}

@media only screen and (max-width: 600px) {
  .item-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .item-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
