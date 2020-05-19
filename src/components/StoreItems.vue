<template>
  <div class="item-container">
    <div class="item" v-for="item in items.items" :key="item.name">
      <img src="https://picsum.photos/125" alt="" />

      <div class="item-name">{{ item.Name }}</div>

      <div class="item-cost">{{ `$ ${item.Cost}` }}</div>

      <div class="item-form">
        <b-button class="btn-sell" disabled>Sell</b-button>
        <b-input-group class="input" size="md">
          <b-form-input pattern="\d+" type="number" value="0"></b-form-input>
        </b-input-group>
        <b-button class="btn-buy">Buy</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreItems",
  props: {
    items: Object,
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
    padding: 20px 15px;

    .item-cost {
      color: $sea-green;
    }

    *:not(.item-name) {
      padding: 5px;
    }

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
      }

      .btn-buy {
        background-color: $sea-green;
      }
      .btn-sell {
        background-color: $grey;
        color: $pure-black;
      }
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
