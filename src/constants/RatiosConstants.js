import { HEADINGS_ProLoss } from "./ProfitAndLossConstants";
const singleData = { "": "ROCE %" };
const Ratios = [
  "11%",
  "12%",
  "11%",
  "10%",
  "10%",
  "9%",
  "10%",
  "10%",
  "11%",
  "12%",
  "11%",
  "8%",
];
export const DUMMY_DATA_RATIOS = [];
for (let i = 2; i <= 14; i++) {
  singleData[HEADINGS_ProLoss[i]] = Ratios[i - 2];
}
for (let i = 0; i < 3; i++) {
  DUMMY_DATA_RATIOS.push(singleData);
}
