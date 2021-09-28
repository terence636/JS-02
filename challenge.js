
function isPass(score) {
  return score >= 5;
}

function isExcellent(score) {
  return score > 8;
}

function isPerfect(score) {
  return score === 11;
}

function getGrade(score) {
  if (isPerfect(score)) {
    return "Perfect";
  } else if (isExcellent(score)) {
    return "Excellent";
  } else if (isPass(score)) {
    return "Pass";
  } else {
    return "Fail";
  }
}

console.log("Score",4, "Your Grade is", getGrade(4));
console.log("Score", 6, "Your Grade is", getGrade(6));
console.log("Score", 9, "Your Grade is", getGrade(9));
console.log("Score", 11, "Your Grade is", getGrade(11));