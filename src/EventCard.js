import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { Slide } from '@material-ui/core';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    objectFit: 'cover',
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    float: 'right',
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
  lightTooltip: {
    background: "#ffffff",
    color: "#330F53",
    boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
    fontSize: 11,
  },
  overlay:{
    height: "100%",
    pointerEvents: "none",
    opacity: 0.4,
    zIndex: 9999999
  },
};

function EventCard(props) {
  const { classes } = props;

  function eventPast(){
    var date = props.date;
    var time = props.time;
    var currentDate = new Date();
    var splitDate = date.split(" ");
    
    console.log(splitDate);
    var year = currentDate.getFullYear();
    console.log(typeof year,typeof parseInt(splitDate[2]));
    if(parseInt(splitDate[2]) < year){
      console.log("year small");
      return true;
    } else {
      console.log("year ok");
      var month = currentDate.getMonth();
      var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      //console.log(months.indexOf(splitDate[1]),month);
      if(months.indexOf(splitDate[1]) < month){
        console.log("month small");
        return true;
      } else {
        console.log("month ok");
        var day = currentDate.getDate();
        console.log(day);
        //console.log(typeof splitDate[0],typeof day);
        if(splitDate[0][0] == 0){
          splitDate[0] = splitDate[0].slice(1,);
          console.log("removed zero");
          console.log(splitDate[0]);
        }
        if(parseInt(splitDate[0]) < day){
          console.log("day small");
          return true;
        } 
        
        else if (splitDate[0] == day){
          console.log("day same");
          var splitTime = time.split(":");
          var eventHour = splitTime[0];
          var hour = currentDate.getHours();
         
          if(parseInt(eventHour) < hour){
            console.log("hour small");
            return true;
          } else {
            console.log("hour ok");
            return false;
          }
        }
        
        else {
          console.log("everything fine");
          return false;
        }
      }
    }
    
  }

  function getImage(i){
      if(i == "https://picnic01"){
        return require('./static/events/picnic01.png');
      } else if(i == "default-talks"){
        return require('./static/events/default-talks.png');
      } else if(i == "default-hackathons"){
        return require('./static/events/default-hackathons.png');
      } else if(i == "default-projects"){
        return require('./static/events/default-projects.png');
      } else if(i == "default-socials"){
        return require('./static/events/default-socials.png');
      } else if(i == "default-others"){
        return require('./static/events/default-others.png');
      } else {
          return i;
      }
  }

  function getTagInfo(tag){
    if(tag === "Talks"){
      return "Find out about the latest tech trends from speakers throughout the industry.";
    } else if(tag === "Hackathons"){
      return "Competitive 24-hour events where you work with a team to create something awesome.";
    } else if(tag === "Projects"){
      return "Learn the trendiest concepts and how to apply them in real life through our beginner friendly sessions."
    } else if(tag === "Socials"){
      return "Hang out and meet members from the society as well as the committee and make awesome new friends!";
    } else {
      return "Something that can't simply be categorized."
    }
  }

  function getDefaultImage(tag){
    if(tag === "Talks"){
      return "default-talks";
    } else if(tag === "Hackathons"){
      return "default-hackathons";
    } else if(tag === "Projects"){
      return "default-projects";
    } else if(tag === "Socials"){
      return "default-socials";
    } else {
      return "default-others";
    }
  }

  EventCard.defaultProps = {
    title: "Default Title",
    date: "1 January 1970",
    time: "00:00",
    location: "UCL Main Quad",
    tag: "Others",
    url:"https://www.facebook.com/ucltechsoc",
};

  const title = props.title;
  const date = props.date;
  const time = props.time;
  const location = props.location;
  const imageUrl = props.image ? getImage(props.image) : getDefaultImage(props.tag);
  const tags = props.tag;
  const url = props.url;
  const isPastEvent = eventPast();
  console.log(date,time);
  return (
    <div>
      <Card className={classes.card} title={isPastEvent? "Event Over" : ""}>
      <div className={isPastEvent? classes.overlay : ""}>
        <CardMedia
          className={classes.media}
          image={getImage(imageUrl)}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="title" component="h2" style={{ overflow:"hidden", textOverflow:"ellipsis", height:"3em", marginTop:"0.5em"}}>
            {title}
          </Typography>
          <Typography component="p">
            Date: {date} <br/>
            Time: {time} <br/>
            Location: <a target="_new" href={"https://maps.google.com/?q="+location}>{location}</a>
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Tooltip title={getTagInfo(tags)} classes={classes.lightTooltip}>
          <Button size="small" className={classes.button}>
            {tags}
          </Button>
          </Tooltip>
          <a target= "_new" href={url}>
          <Button size="small" className={classes.button2}>
            Event Info
          </Button>
          </a>
        </CardActions>
        </div>
      </Card> 
    </div>
  );
}

EventCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventCard);
