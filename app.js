function rentalCarCost(d) {
  // Your solution here
  if (d < 3) {
    const total = d * 40;
    return total;
  } else if (d >= 3 && d < 7) {
    const total = d * 40;
    const finalTotal = total - 20;
    return finalTotal;
  } else if (d >= 7) {
    const total = d * 40;
    const finalTotal = total - 50;
    return finalTotal;
  }
}
