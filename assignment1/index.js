function fibs(num) {
  let total = [];
  for (let i = 0; i < num; i++) {
    if (i <= 1) {
      total.push(i)
    } else {
      total.push(total[i - 1] + total[i - 2])
    }
  }
  return total
}