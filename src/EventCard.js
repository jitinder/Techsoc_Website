import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
      color: "#330F53",
  },
  button2: {
    color: "#ffffff",
    backgroundColor: "#330F53",
    '&:hover': {
        color: '#330F53',
        backgroundColor: "ffffff",
        opacity: 1,
      },
  },
};

function EventCard(props) {
  const { classes } = props;

  function getImage(i){
      if(i == "default"){
        
      } else {
          return require('./static/events/cardimagesize.jpg');
      }
  }

  EventCard.defaultProps = {
    title: "Default Title",
    date: "1 January 1970",
    time: "00:00",
    location: "Main Quad",
    image: 'meh',
};

  const title = props.title;
  const imageUrl = props.image;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={getImage(imageUrl)}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.button}>
            Share
          </Button>
          <Button size="small" className={classes.button2}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

EventCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventCard);
