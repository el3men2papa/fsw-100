

var shopper = {
    groceryCart: ["Pizza", "Meat", "Milk", "Cheeese","Oil" ],
    isOnStock: true,
    prices: 5.56,
    price: function() {
      return this.groceryCart [0] + " $" + this.prices;
    }
  }; 

  console.log(shopper.price())

