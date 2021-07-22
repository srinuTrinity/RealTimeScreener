import React from 'react'
import { Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    footer:{
        backgroundColor: "#380d53",
        height: `60px`,
        color: "white",
        padding: `20px`,
    },
    icon:{
        margin: `10px`,
    },
});

function Footer() {
    const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container spacing={3} alignItems="center">
          <Grid item xs={6} sm={3}>
              Copyright @xyz
          </Grid>
          <Grid item xs={6} sm={3}>
          </Grid>
          <Grid item xs={6} sm={3}>
          </Grid>
          <Grid item xs={6} sm={3}>
          <FacebookIcon  className={classes.icon}/>
          <InstagramIcon  className={classes.icon}/>
          <TwitterIcon  className={classes.icon}/>
          <LinkedInIcon  className={classes.icon}/>
          </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
