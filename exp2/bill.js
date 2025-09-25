document.getElementById('calculate-btn').addEventListener('click', () => {
  const quantities = document.querySelectorAll('.quantity');
  let total = 0;

  quantities.forEach(input => {
    const price = parseFloat(input.getAttribute('data-price'));
    const qty = parseInt(input.value) || 0;
    total += price * qty;
  });

  document.getElementById('total-amount').textContent = total;
});
