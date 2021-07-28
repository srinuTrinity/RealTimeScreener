import { HEADINGS_ProLoss } from "./ProfitAndLossConstants";
const singleData = { "": "Cash from Operating Activity +" };
const CashFlows = [
  "20,494",
  "33,338",
  "24,483",
  "36,918",
  "43,261",
  "34,374",
  "38,134",
  "49,550",
  "71,459",
  "42,346",
  "94,877",
  "26,185",
];
export const DUMMY_DATA_CASHFLOWS = [];
for (let i = 2; i <= 14; i++) {
  singleData[HEADINGS_ProLoss[i]] = CashFlows[i - 2];
}
for (let i = 0; i < 3; i++) {
  DUMMY_DATA_CASHFLOWS.push(singleData);
}
