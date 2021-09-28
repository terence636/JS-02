
function monthlyCost (total) {
  const fee = 3;
  const interest = 0.01

  return total+total*interest+fee
}

const result = monthlyCost(1000)
console.log(result)

