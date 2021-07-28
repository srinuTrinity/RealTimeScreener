export const HEADINGS_ProLoss = ["S.No.", ""];

export const ProLoss = [
  "203,174",
  "265,050",
  "357,677",
  "395,957",
  "433,521",
  "374,372",
  "272,583",
  "303,954",
  "390,823",
  "568,337",
  "596,679",
  "466,307",
];
let singleData = { "": "Sales +" };
let year = 2010;
for (let i = 0; i <= 11; i++) {
  HEADINGS_ProLoss.push(`Mar ${year}`);
  singleData[`Mar ${year}`] = ProLoss[i];
  year = year + 1;
}
console.log(HEADINGS_ProLoss);
export const DUMMY_DATA_ProLoss = [];
for (let i = 0; i < 10; i++) {
  DUMMY_DATA_ProLoss.push(singleData);
}
