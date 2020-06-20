import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
}));

class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  handleChange() {
    this.state.value === 0
      ? this.setState({ value: 1 })
      : this.setState({ value: 0 });
  }
  render() {
    const classes = this.props;
    const theme = this.props;
    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="A" />
          <Tab label="B" />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
        >
          <TabContainer dir={theme.direction}>Item One</TabContainer>
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

Feature.propTypes = {
  // children: PropTypes.node.isRequired,
  // dir: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(Feature);
