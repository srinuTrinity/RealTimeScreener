import React from 'react'
import SearchComp from './SearchComp'
import { Box, Button, makeStyles, Typography, AppBar } from '@material-ui/core'
import { items } from './Datalist';

const useStyles = makeStyles({
  home:{
    fontFamily: "'Montserrat', sans-serif",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  division:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button:{
    margin: "9px",
  },
  button2:{
    margin: "0px 9px 0px 9px",
    borderRadius: "0px",
    backgroundColor: "#EFF1F4",
    width: `13%`,
  },
  div2:{
    display: "inline",
    overflowX: "visible",
  },
  app:{
    backgroundColor: "grey",
    margin: "0",
    padding: "20px",
    boxShadow: "none",
  }
});

function HomePage() {
  const classes = useStyles();
  return (
    <div>
      <Box style={{color: '#547FEE'}} m={10} className={classes.home}>
        <Typography variant='h3'>TRINITY LABS</Typography>
        <br/>
        <Typography variant='h6'>Tag Line</Typography><br/>
        <SearchComp/>
        <div className={classes.division}>
          Or Analyze
        {items.map((item) =>{
          const {id, stock} = item;
          return (
            <>
            <Button className={classes.button} variant="outlined" color="primary" key={id}>
              {stock}
            </Button>
            </>
          );
        })}
        </div>
      </Box>
      <AppBar position="static" className={classes.app}>
      <Typography variant='h5'>Top Gainers</Typography>
      </AppBar>
      <div className={classes.div2}>
      {items.map((item) =>{
          const {id, stock} = item;
          return (
            <Button className={classes.button2} key={id}>
              {stock}
            </Button>
          );
        })}</div>
      <AppBar position="static" className={classes.app}>
        <Typography variant='h5'>Top Losers</Typography>
      </AppBar>
      <div className={classes.div2}>
      {items.map((item) =>{
          const {id, stock} = item;
          return (
            <Button className={classes.button2} key={id}>
              {stock}
            </Button>
          );
        })}</div>
    </div>
  )
}

export default HomePage
