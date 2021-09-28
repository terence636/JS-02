
console.log("PART1");
function printWelcome (frens) {
  
  let temp="";
  frens.forEach(fren => {
    temp=temp+fren+',';
  });
    console.log("Welcome "+temp);
}

printWelcome(["mike","cindy","james"]);


console.log("==========================");

console.log("PART2")

function getAge(birthYear) {

  const now = new Date();
  const currentYear = now.getFullYear();
  // console.log(currentYear)
  return currentYear - birthYear;
}

console.log("You are", getAge(1975))

console.log("==========================");

console.log("PART3");

// Input is an array of objects
const myFrens = [
  { name: "mike", birthYear: 1980 },
  { name: "cindy", birthYear: 1975 },
  { name: "james", birthYear: 1985 },
];

function printWelcomeAgain (frens) {
  frens.forEach(fren => {
    console.log("Welcome " + fren.name + "." +
    "You are " + getAge(fren.birthYear) + ".")
  })
}

printWelcomeAgain(myFrens);

console.log("==========================");

