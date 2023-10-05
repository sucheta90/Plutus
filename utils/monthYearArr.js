const yearArray = [];

const year = [];

const fs = require("fs");

// function to create an year array from 2023 to 2050
function createYearArr() {
  for (let i = 2023; i <= 2050; i++) {
    year.push(i);
  }
  return year;
}

function monthYearJson(year) {
  year.forEach((element) => {
    for (let i = 1; i <= 12; i++) {
      yearArray.push({ month: `${i}`, year: element });
    }
  });
  console.log(yearArray);
  fs.writeFile("./seeds/monthYear.json", JSON.stringify(yearArray), (err) =>
    console.log(err)
  );
  //   return yearArray;
}

console.log(createYearArr());
console.log(monthYearJson(year));
console.log(yearArray.length);
