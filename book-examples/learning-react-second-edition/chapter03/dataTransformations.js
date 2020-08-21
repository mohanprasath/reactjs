let schools = ["Yorktown", "Washington & Liberty", "Wakefield"];
const highSchools = schools.map((school) => `${school} High School`);
console.log(highSchools.join("\n"));
console.log(schools.map((school) => ({ name: school })));

schools = [
  { name: "Yorktown" },
  { name: "Stratford" },
  { name: "Washington & Liberty" },
  { name: "Wakefield" },
];
const editName = (oldName, name, arr) =>
  arr.map((item) => (item.name === oldName ? { ...item, name } : item));

let updatedSchools = editName("Stratford", "HB Woodlawn", schools);
console.log(updatedSchools[1]); // { name: "HB Woodlawn" }
console.log(schools[1]); // { name: "Stratford" }

const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age > max}`);
  if (age > max) {
    return age;
  } else {
    return max;
  }
}, 0);

console.log("maxAge", maxAge);

const maxVal = ages.reduce((max, age) => (max > age ? max : age), 0);
console.log(maxVal);
// 21 > 0 = true
// 18 > 21 = false
// 42 > 21 = true
// 40 > 42 = false
// 64 > 42 = true
// 63 > 64 = false
// 34 > 64 = false
// maxAge 64
