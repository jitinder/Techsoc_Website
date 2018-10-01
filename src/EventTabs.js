import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import EventCard from './EventCard.js';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const NotDesktop = props => <Responsive {...props} maxWidth={991} />;

function TabContainer(props) {
    return (
        <div>
            <Desktop>
                <Typography component="div" style={{height: 450, overflow: 'auto' }}>
                    {props.children}
                </Typography>
            </Desktop>
            <NotDesktop>
                <Typography component="div" style={{height: 600, overflow: 'auto' }}>
                    {props.children}
                </Typography>
            </NotDesktop>
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: '#eeeeee',
    },
    colorDefault: {
        backgroundColor: "#330F53",
        color: "#ffffff",
        borderRadius: 10,
    },
    tabsRoot: {
    },
    tabsIndicator: {
        backgroundColor: '#ffffff',
    },
    tabRoot: {
        marginRight: theme.spacing.unit * 0.2,
        fontWeight: theme.typography.fontWeightLight,
        '&:hover': {
            color: '#ffffff',
            opacity: 1,
        },
        '&$tabSelected': {
            color: '#ffffff',
            fontWeight: theme.typography.fontWeightRegular,
        },
        '&:focus': {
            color: '#ffffff',
            fontWeight: theme.typography.fontWeightRegular,
        },
    },
    typography: {
        padding: theme.spacing.unit * 3,
    },
});

var fetchUrl = "https://techsocbackend.azurewebsites.net/events";

export class RenderCards extends React.Component{

    state = {
        events : [],
        fetched : false,
    }

    getEventList(){
        fetch(fetchUrl).then(function(response) {
            return response.json();
          })
          .then(myJson => {
            this.setState({events: myJson, fetched: true});
          });       
    }

    componentDidMount() {
        this.getEventList();
      }

      toShow = (label, value) => {
        if(value === 0){ // Case All
            return true;
        }
        var thisLabel = this.getLabel(value);
        if(label === thisLabel){
            return true;
        }
        return false;
    }

    getLabel = (value) => {
        switch(value){
            case 0:
            return "All";
            case 1:
            return "Talks";
            case 2:
            return "Hackathons";
            case 3:
            return "Projects";
            case 4:
            return "Socials";
            default:
            return "Others";
        }
    }

      render() {    
          var listItems;
          if(this.state.fetched){
            listItems = this.state.events.map((e) => (
            <div style={{display: this.toShow(e.data.type, this.props.styleValues) ? 'block' : 'none' }} class="col-lg-4 col-md-6 col-sm-12 p-3">
                <EventCard title={e.data.title} date={e.data.date} time={e.data.time} location={e.data.location} image={e.data.img_url}  url={e.data.link} tag={e.data.type}/>
            </div>)
            );
          }
        return (
          <div>
            { this.state.fetched &&
            <div class= "row" id={this.props.id}>
                {listItems}
            </div>
            }
            { !this.state.fetched &&
                <div style={{padding: "auto", paddingTop: "10%"}}>{"Loading Event Data... Please Wait"}<br/><i class="fa fa-circle-o-notch fa-spin fa-3x" style={{padding:"5%"}}/></div>
            }
          </div>
        );
      }
}

class EventTabs extends React.Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };      

    componentDidMount = () => {
        
    };

    toShow = (label, value) => {
        if(value === 0){ // Case All
            return true;
        }
        var thisLabel = this.getLabel(value);
        if(label === thisLabel){
            return true;
        }
        return false;
    }

    getLabel = (value) => {
        switch(value){
            case 0:
            return "All";
            case 1:
            return "Talks";
            case 2:
            return "Hackathons";
            case 3:
            return "Projects";
            case 4:
            return "Socials";
            default:
            return "Others";
        }
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.colorDefault}>
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons='on'
                        classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}>
                        <Tab label="All" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                        <Tab label="Talks" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                        <Tab label="Hackathons" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                        <Tab label="Projects" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                        <Tab label="Socials" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                        <Tab label="Others" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                    </Tabs>
                </AppBar>
                    <TabContainer>
                        <div class="container">
                                <RenderCards styleValues={this.state.value} id="eventContainer"/>
                        </div>
                    </TabContainer>
            </div>
        );
    }
}

EventTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventTabs);
