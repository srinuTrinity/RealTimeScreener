const ProsAndCons = {
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 24,
    borderRadius: 10,
    width: "100%",
    marginTop: 24,
  },
  eachBox: {
    width: "60%",
    borderStyle: "solid",
    borderWidth: 2,
    marginRight: 16,
    borderRadius: 10,
    marginLeft: 10,
    padding: 15,
    paddingTop: 0,
  },
  pros: {
    borderColor: "rgb(125,232,202)",
  },
  list: {
    paddingLeft: 15,
    marginTop: 0,
  },
  cons: {
    borderColor: "rgb(243,180,180)",
  },
  listItem: {
    marginBottom: 3,
    fontSize: 16,
    color: "grey",
  },
  heading: {
    fontWeight: 600,
    letterSpacing: 2,
    fontSize: 14,
  },
  "@media all and (max-width:768px)": {
    card: {
      flexDirection: "column",
      alignItems: "center",
    },
    eachBox: {
      width: "100%",
      marginBottom: 20,
    },
  },
};
export default ProsAndCons;
