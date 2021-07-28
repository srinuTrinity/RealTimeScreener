const NavBarStyles = {
  box: {
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "#301b5c",
    // backgroundImage: "linear-gradient(to right,#84b7e0)",
    backgroundColor: "#634882",
    "@media (max-width:768px)": {
      paddingBottom: -10,
    },
  },
  item: {
    marginRight: 16,
    fontWeight: 700,
    fontFamily: "Poppins",
    fontSize: 18,
  },
  leftAlign: {
    "@media (min-width:992px)": {
      marginLeft: "60%",
    },
  },
};
export default NavBarStyles;
