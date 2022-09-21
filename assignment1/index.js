// Loop
function fibs(num) {
  let total = [];
  for (let i = 0; i < num; i++) {
    if (i <= 1) {
      total.push(i);
    } else {
      total.push(total[i - 1] + total[i - 2]);
    }
  }
  return total;
}

// Recursion
function fibsRec(num) {
  if (num <= 1) return [0];

  const prev = fibsRec(num - 1);
  return [...prev, prev.at(-1) + prev.at(-2) || 1];
}
