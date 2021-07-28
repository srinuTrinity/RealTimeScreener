import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Card, makeStyles } from "@material-ui/core/";
import styles from "../styles/ProsAndConsStyles";
import { pros, cons } from "../constants/ProsAndConsConstants";

export default function ProsAndCons() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const card = () => {
    return (
      <Card variant="outlined" className={classes.card}>
        <div className={`${classes.eachBox} ${classes.pros}`}>
          <h1 className={classes.heading}>PROS</h1>
          <ul className={classes.list}>
            {pros.map((each) => {
              return <li className={classes.listItem}>{each}</li>;
            })}
          </ul>
        </div>
        <div className={`${classes.eachBox} ${classes.cons}`}>
          <h1 className={classes.heading}>CONS</h1>
          <ul className={classes.list}>
            {cons.map((each) => {
              return <li className={classes.listItem}>{each}</li>;
            })}
          </ul>
        </div>
      </Card>
    );
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" style={{ width: "93%" }} children={card}>
        <Typography
          component={card}
          style={{
            backgroundColor: "white",
          }}
        />
      </Container>
    </React.Fragment>
  );
}
