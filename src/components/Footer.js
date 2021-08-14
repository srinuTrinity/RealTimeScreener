import React from 'react'
import { Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    footer:{
        backgroundColor: "rgba(143, 217, 240, 0.45)",
        height: `260px`,
        color: "white",
        padding: `20px`,
        color: "#4B4D51",
    },
});

function Footer() {
    const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container spacing={3} alignItems="center">
          <Grid item xs={6} sm={3}>
              Terms and Conditions
          </Grid>
          <Grid item xs={6} sm={3}></Grid>
          <Grid item xs={6} sm={3}>
            Product
          </Grid>
          <Grid item xs={6} sm={3}>
            Team
          </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
