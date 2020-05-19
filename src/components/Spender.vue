<template>
  <div class="main">
    <div class="person">
      <img src="./../assets/images/tony_stark.png" alt="Tony Stark" />
      <h1>Spend Tony Stark' Money</h1>
    </div>
    <div class="person-money">
      $12,800,000,000 left
    </div>
    <StoreItems v-bind:items="{ items }" />
  </div>
</template>

<script>
import StoreItems from "./StoreItems";
export default {
  name: "Spender",
  components: {
    StoreItems,
  },
  data() {
    return {
      items: [
        { Name: "Big Mac", Cost: 2 },
        { Name: "Cup of Coffee", Cost: 4 },
        { Name: "Book", Cost: 15 },
        { Name: "Video Game", Cost: 60 },
        { Name: "Charity", Cost: 100 },
        { Name: "Headphones", Cost: 200 },
        { Name: "Air Jordans", Cost: 200 },
        { Name: "Skateboard", Cost: 300 },
        { Name: "Smartphone", Cost: 600 },
        { Name: "Gaming Console", Cost: 600 },
        { Name: "Bike", Cost: 800 },
        { Name: "Drone", Cost: 800 },
        { Name: "Designer Handbag", Cost: 1000 },
        { Name: "Jet Ski", Cost: 8000 },
        { Name: "4K TV", Cost: 10000 },
        { Name: "Diamond Ring", Cost: 10000 },
        { Name: "Rolex", Cost: 15000 },
        { Name: "Speed boat", Cost: 30000 },
        { Name: "Food Truck", Cost: 50000 },
        { Name: "Tesla", Cost: 70000 },
        { Name: "Monster Truck", Cost: 150000 },
        { Name: "Helicopter", Cost: 175000 },
        { Name: "Ferrari", Cost: 200000 },
        { Name: "Lamborghini", Cost: 200000 },
        { Name: "Firetruck", Cost: 200000 },
        { Name: "Townhouse", Cost: 200000 },
        { Name: "Bar", Cost: 300000 },
        { Name: "Pizza Shop", Cost: 500000 },
        { Name: "Bar of Gold", Cost: 500000 },
        { Name: "Superbowl Ad", Cost: 5000000 },
        { Name: "Beach House", Cost: 5000000 },
        { Name: "Yacht", Cost: 10000000 },
        { Name: "F16", Cost: 15000000 },
        { Name: "Skyscraper", Cost: 50000000 },
        { Name: "Mansion", Cost: 50000000 },
        { Name: "Rocket", Cost: 60000000 },
        { Name: "Passenger Jet", Cost: 150000000 },
        { Name: "Mona Lisa", Cost: 780000000, Limit: 1 },
        { Name: "Cruise Ship", Cost: 1200000000 },
        { Name: "NBA Team", Cost: 1300000000, Limit: 30 },
        { Name: "MLB Team", Cost: 1500000000, Limit: 30 },
        { Name: "NFL Team", Cost: 2300000000, Limit: 32 },
      ],
    };
  },
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
    background-color: $sea-green;
    font-size: 32px;
    color: $pure-white;
    font-weight: bold;
    top: 0;
    position: sticky;
  }
}
</style>
