function calculateTotalBudget() {
   
    var categories = ['dairy', 'meat', 'fruits', 'veggies', 'bakedGoods', 'other'];
    var totalBudget = categories.reduce((total, category) => {
      var budget = parseFloat(document.getElementById(category).value) || 0;
      return total + budget;
    }, 0);
    document.getElementById('result').textContent = `Your total Ideal budget for next Grocery is $${totalBudget.toFixed(2)}`;
  }
  
  