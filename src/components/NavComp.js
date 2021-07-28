import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/NavBarStyles";
const NavComp = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <Container>
      <Navbar expand="lg" className={classes.box}>
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ color: "white" }}
            className={classes.item}
          ></Navbar.Brand>
          <Navbar.Toggle
            style={{
              borderColor: "white",
              borderWidth: 2,
              backgroundColor: "",
            }}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`${classes.leftAlign} me-auto`}>
              <Nav.Link
                href="#watchList"
                style={{ color: "white" }}
                className={classes.item}
              >
                Watch List
              </Nav.Link>
              <Nav.Link
                href="#filterSearch"
                className={classes.item}
                style={{ color: "white" }}
              >
                Filter-Search
              </Nav.Link>
              <Nav.Link
                href="#querySearch"
                className={classes.item}
                style={{ color: "white" }}
              >
                Query-Search
              </Nav.Link>
              <Nav.Link
                href="#Login"
                className={classes.item}
                style={{ color: "white" }}
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};
export default NavComp;
