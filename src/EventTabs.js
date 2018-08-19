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
            return "all";
            case 1:
            return "talks";
            case 2:
            return "hackathons";
            case 3:
            return "projects";
            case 4:
            return "socials";
            default:
            return "others";
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
                            <div class="row" id="eventContainer">
                                <div style={{display: this.toShow("socials", this.state.value) ? 'block' : 'none' }} class="col-md-4 sm-12 p-3">
                                    <EventCard title="Treasure Hunt Welcome Picnic" date="21 September 2018" time="16.00" location="Gordon Square Garden" image="picnic01"  url="ucltechsoc" tag="Socials"/>
                                </div>
                                
                            </div>
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
