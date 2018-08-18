import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8*3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'theme.palette.background.paper',
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
  tabRoot:{
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
            <Tab label="All" classes={{ root: classes.tabRoot, selected: classes.tabSelected }}/>
            <Tab label="Talks" classes={{ root: classes.tabRoot, selected: classes.tabSelected }}/>
            <Tab label="Hackathons" classes={{ root: classes.tabRoot, selected: classes.tabSelected }}/>
            <Tab label="Projects" classes={{ root: classes.tabRoot, selected: classes.tabSelected }}/>
            <Tab label="Socials" classes={{ root: classes.tabRoot, selected: classes.tabSelected }}/>
            <Tab label="Others" classes={{ root: classes.tabRoot, selected: classes.tabSelected }}/>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item 1</TabContainer>}
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
