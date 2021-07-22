import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import About from '../Assets/AboutUs.jpg';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    margin: 10,
  },
  cardDisplay: {
  },
});

export default function Cards() {
  const classes = useStyles();

  return (
    <Grid container className={classes.cardDisplay}>
    <Grid item xs={6} sm={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="About Us"
          height="300"
          image={About}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            About Us
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut leo lobortis, 
          bibendum sapien lobortis, venenatis quam. Integer at vulputate mauris, a elementum lorem
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={6} sm={3}>
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="About Us"
        height="300"
        image={About}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Our Goals
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut leo lobortis, 
          bibendum sapien lobortis, venenatis quam. Integer at vulputate mauris, a elementum lorem
          </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
  </Grid>

    <Grid item xs={6} sm={3}>
    <Card className={classes.root}>
    <CardActionArea>
        <CardMedia
        component="img"
        alt="About Us"
        height="300"
        image={About}
        title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Contact Us
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut leo lobortis, 
            bibendum sapien lobortis, venenatis quam. Integer at vulputate mauris, a elementum lorem
            </Typography>
        </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" color="primary">
        Learn More
        </Button>
    </CardActions>
    </Card>
    </Grid>


    <Grid item xs={6} sm={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="About Us"
          height="300"
          image={About}
          title="Contemplative Reptile"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Extras
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut leo lobortis, 
            bibendum sapien lobortis, venenatis quam. Integer at vulputate mauris, a elementum lorem
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
  );
}
