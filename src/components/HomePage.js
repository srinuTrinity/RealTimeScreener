import React from 'react'
import SearchComp from './SearchComp'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
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
    </div>
  )
}

export default HomePage
