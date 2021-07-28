const ProfitLossCardStyles = {
  Card: {
    width: "23%",
    maxWidth: 325,
    minWidth: 260,
    borderColor: "rgba(208, 219, 235, 0.8)",
    borderStyle: "solid",
    borderWidth: 1.5,
    borderRadius: 8,
    padding: "16px 15px 16px 15px",
    lineHeight: 0,
    marginRight: 14,
    marginBottom: 24,
  },
  innerCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 18,
    fontWeight: 500,
  },
  "@media all and (max-width:768px)": {
    Card: {
      marginLeft: 16,
    },
  },
};
export default ProfitLossCardStyles;
