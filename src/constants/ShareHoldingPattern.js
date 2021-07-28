export const HEADINGS_SHARE = [
  "S.No.",
  "",
  "JUN 2018",
  "SEP 2018",
  "DEC 2018",
  "Mar 2019",
  "Jun 2019",
  "Sep 2019",
  "Dec 2019",
  "Mar 2020",
  "Jun 2020",
  "Sep 2020",
  "Dec 2020",
  "Mar 2021",
];
const Values = [
  "47.35",
  "47.27",
  "47.19",
  "47.27",
  "47.29",
  "50.05",
  "50.03",
  "50.07",
  "50.37",
  "50.49",
  "50.54",
  "50.58",
];
const singleData = {
  "": "Promoters +",
};
for (let i = 2; i <= 13; i++) {
  singleData[HEADINGS_SHARE[i]] = Values[i - 2];
}
export const DUMMY_DATA_SHARE = [];
for (let i = 0; i < 5; i++) {
  DUMMY_DATA_SHARE.push(singleData);
}
