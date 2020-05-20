<template>
  <div class="item-form">
    <b-button
      @click="sellItem(item)"
      :class="lastAmount == 0 ? 'disabled' : 'btn-sell'"
      :disabled="lastAmount == 0"
      >Sell</b-button
    >
    <b-input-group class="input" size="md">
      <b-form-input
        @input="inputChange({ item, $event })"
        type="number"
        :value="lastAmount"
      ></b-form-input>
    </b-input-group>
    <b-button
      @click="buyItem(item)"
      :class="checkItemLimit(item) ? 'disabled' : 'btn-buy'"
      :disabled="checkItemLimit(item)"
      >Buy</b-button
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BuySell",
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      lastAmount: 0,
    };
  },
  computed: { ...mapGetters(["getMoney"]) },
  methods: {
    inputChange(data) {
      let tempAmount = parseInt(data.$event);
      let cost = data.item.Cost;

      if (isNaN(tempAmount) || tempAmount > data.item.Limit) {
        tempAmount = 0;
        return;
      }

      if (tempAmount > this.lastAmount) {
        this.$store.commit(
          "DECREASE_MONEY",
          (tempAmount - this.lastAmount) * cost
        );
      } else {
        this.$store.commit(
          "INCREASE_MONEY",
          (this.lastAmount - tempAmount) * cost
        );
      }

      this.lastAmount = tempAmount;
    },
    buyItem(data) {
      this.lastAmount++;
      this.$store.commit("DECREASE_MONEY", data.Cost);
    },
    sellItem(data) {
      this.lastAmount--;
      this.$store.commit("INCREASE_MONEY", data.Cost);
    },
    checkItemLimit(item) {
      if (item.Cost > this.getMoney || this.lastAmount >= item.Limit)
        return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.item-form {
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  align-content: space-between;

  button {
    width: $btn-sm;
    padding: 8px;
    border: none;
  }

  .input-group,
  input {
    width: $input-md;
    text-align: center;
    padding: 5px;
  }

  .btn-buy {
    background-color: $sea-green;
  }
  .btn-sell {
    background-color: $tomato;
    color: $white;
  }
  .disabled {
    background-color: $grey;
    color: $pure-black;
  }

  // Remove spinner/arrows from number inputs
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
