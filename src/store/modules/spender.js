const state = {
  storeItems: [
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
    { Name: "Ford Flathead", Cost: 40000 },
    { Name: "Tesla", Cost: 70000 },
    { Name: "Monster Truck", Cost: 150000 },
    { Name: "Helicopter", Cost: 175000 },
    { Name: "Ferrari", Cost: 200000 },
    { Name: "Townhouse", Cost: 200000 },
    { Name: "Rolls Royce Phantom", Cost: 388000 },
    { Name: "Vibranium 50g", Cost: 500000 },
    { Name: "Superbowl Ad", Cost: 5000000 },
    { Name: "Beach House", Cost: 5000000 },
    { Name: "Yacht", Cost: 10000000 },
    { Name: "F16", Cost: 15000000 },
    { Name: "Skyscraper", Cost: 50000000 },
    { Name: "Mansion", Cost: 50000000 },
    { Name: "Cpt America Shield", Cost: 54000000 },
    { Name: "Passenger Jet", Cost: 150000000 },
    { Name: "Mona Lisa", Cost: 780000000, Limit: 1 },
    { Name: "Cruise Ship", Cost: 1200000000 },
    { Name: "NBA Team", Cost: 1300000000, Limit: 30 },
    { Name: "MLB Team", Cost: 1500000000, Limit: 30 },
  ],
  money: 12800000000,
  cartItems: [],
};

const getters = {
  getItems: (state) => state.storeItems,
  getMoney: (state) => state.money,
  getParsedMoney: (state) =>
    state.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),

  getCartItems: (state) => state.cartItems,
};

const actions = {};

const mutations = {
  INCREASE_MONEY: (state, payload) => (state.money += payload),
  DECREASE_MONEY: (state, payload) =>
    payload > state.money ? state.money : (state.money -= payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
