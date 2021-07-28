import React from "react";
import { makeStyles } from "@material-ui/core";
import styles from "../styles/ProfitLossCardStyles";
const IndividualCard = (props) => {
  const { text } = props;
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.Card}>
      <h1 className={classes.heading}>{text}</h1>
      <div className={classes.innerCard}>
        <p style={{ color: "#60607B" }}>10 Years:</p>
        <p>6%</p>
      </div>
      <div className={classes.innerCard}>
        <p style={{ color: "#60607B" }}>5 Years:</p>
        <p>11%</p>
      </div>
      <div className={classes.innerCard}>
        <p style={{ color: "#60607B" }}>3 Years:</p>
        <p>6%</p>
      </div>
      <div className={classes.innerCard}>
        <p style={{ color: "#60607B" }}>TTM:</p>
        <p>-22%</p>
      </div>
    </div>
  );
};
const ProfitLossCards = () => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <IndividualCard text="Compounded Sales Growth" />
      <IndividualCard text="Compounded Profit Growth" />
      <IndividualCard text="Stock Price CAGR" />
      <IndividualCard text="Return On Equity" />
    </div>
  );
};

export default ProfitLossCards;
