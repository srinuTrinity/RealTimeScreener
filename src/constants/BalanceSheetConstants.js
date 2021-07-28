import { HEADINGS_ProLoss } from "./ProfitAndLossConstants";
const singleData = { "": "Share Capital +" };
const BALANCE = [
  "2,978",
  "2,981",
  "2,979",
  "2,936",
  "2,940",
  "2,943",
  "2,948",
  "2,959",
  "5,922",
  "5,926",
  "6,339",
  "6,445",
];
export const DUMMY_DATA_BALANCE = [];
for (let i = 2; i <= 14; i++) {
  singleData[HEADINGS_ProLoss[i]] = BALANCE[i - 2];
}
for (let i = 0; i < 10; i++) {
  DUMMY_DATA_BALANCE.push(singleData);
}
