function calculateBudget() {
  
  const budgetAmount = parseFloat(document.getElementById('budget').value);
  const actualSpending = parseFloat(document.getElementById('actualSpending').value);

  if (isNaN(budgetAmount) || isNaN(actualSpending)) {
    alert('Please enter valid numeric values for both budget and actual spending.');
    return;
  }
  const difference = actualSpending - budgetAmount;
  const percentage = (difference / budgetAmount) * 100;
  let result = '';
  if (percentage <= 0) {
    result = `You are under budget by ${Math.abs(percentage).toFixed(2)}%`;
  } else {
    result = `You are over budget by ${percentage.toFixed(2)}%`;
  }
  document.getElementById('result').textContent = result;
}
