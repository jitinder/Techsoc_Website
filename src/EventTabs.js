import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import EventCard from './EventCard.js';
import Responsive from 'react-responsive';
import './EventTabs.css';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const NotDesktop = props => <Responsive {...props} maxWidth={991} />;

function TabContainer(props) {
    return (
        <div>
            <Desktop>
                <Typography component="div" style={{height: 400, overflow: 'auto' }}>
                    {props.children}
                </Typography>
            </Desktop>
            <NotDesktop>
                <Typography component="div" style={{height: 800, overflow: 'auto' }}>
                    {props.children}
                </Typography>
            </NotDesktop>
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

filterSelection('all');
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("content");
    if (c == "all") c = "";
    console.log("clicked " +c);
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  // Show filtered elements
 function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  // Hide elements that are not selected
 function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1); 
      }
    }
    element.className = arr1.join(" ");
  }

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

class EventTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };      

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
                        <Tab label="All" onClick="filterSelection('all')" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                        <Tab label="Talks" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                        <Tab label="Hackathons" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                        <Tab label="Projects" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                        <Tab label="Socials" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                        <Tab label="Others" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                    </Tabs>
                </AppBar>
                {value === 0 &&
                    <TabContainer>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-4 sm-12 p-3">
                                <div class="content hacks">
                                    <EventCard title="Title" />
                                    </div>
                                </div>
                                <div class="col-md-4 sm-12 p-3">
                                <div class="content hacks">
                                    <EventCard />
                                    </div>
                                </div>
                                <div class="col-md-4 sm-12 p-3">
                                <div class="content talks">
                                    <EventCard title="Title" />
                                    </div>
                                </div>
                                <div class="col-md-4 sm-12 p-3">
                                <div class="content socials">
                                    <EventCard title="Title" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabContainer>}
                {value === 1 && <TabContainer>Item 2</TabContainer>}
                {value === 2 && <TabContainer>Item 3</TabContainer>}
                {value === 3 && <TabContainer>Item 4</TabContainer>}
                {value === 4 && <TabContainer>Item 5</TabContainer>}
                {value === 5 && <TabContainer>Item 6</TabContainer>}
            </div>
        );
    }
}

EventTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventTabs);
