import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";

import ImageArray from "./Sections/ImageArray";
// Sectional components


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  scroller: {
    overflow: "hidden"
  },
  card: {
    marginTop: 20
  },
  treatmentBadge: {
    marginRight: 20
  },
  sectionHolder: {
    background: "#fafafa"
  },
  contentHolder: {
    //  setting the padding based on the screen size
    [theme.breakpoints.down("sm")]: {
      padding: 8
    },
    [theme.breakpoints.up("md")]: {
      padding: 8 * 3
    },
    [theme.breakpoints.up("lg")]: {
      padding: 8 * 3
    }
  }
});

class LayoutList extends React.Component {
  state = {
    libraryData: this.props.libraryData
  };

  componentDidMount() {
    this.setState({
      libraryData: this.props.libraryData
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.libraryData !== this.props.libraryData) {
      this.setState({
        libraryData: this.props.libraryData
      });
    }
  }

  render() {
    const { classes } = this.props;
    const content = [];

    // create sections based on layout
    let libraryDataArray = this.state.libraryData;

    let layoutIdToTitle = {};
    let layoutIdToData = {};
    let layoutTabs = {};

    for (let item of libraryDataArray) {

      if (! (item.layoutId in layoutIdToTitle))
      {
        layoutIdToTitle[item.layoutId] = item.layoutTitle;
        layoutIdToData[item.layoutId] = {};
        layoutTabs[item.layoutId] = {};   
      }

      if (item.tabId ===""){
        item.tabId = "-";
      }

      if (! (item.tabId in layoutIdToData[item.layoutId]))
      {
        layoutIdToData[item.layoutId][item.tabId] = [];
        layoutTabs[item.layoutId][item.tabId] = item.tabTitle? item.tabTitle: item.tabId;
      }

      layoutIdToData[item.layoutId][item.tabId].push(item);
    }

    for (let layoutId of Object.keys(layoutIdToTitle).sort()) 
    {
      let layoutTitle = layoutIdToTitle[layoutId];
      let tabTitles = [];
      let tabData = [];

      for (let myTabId of Object.keys(layoutTabs[layoutId]).sort())
      {
        tabTitles.push(layoutTabs[layoutId][myTabId]);
        tabData.push(layoutIdToData[layoutId][myTabId]);
      }
      switch (layoutId) {
        case "imageArray":
          content.push(
            <Grid item key={layoutId}>
            <span id="section4" />
            <ImageArray
              title={layoutTitle}
              tabtitles={tabTitles}
              data={tabData}
            />
            </Grid>
          );
          break;

        default:
          console.log("Missing a layout type " + layoutId);
          break;
      }
    }

    return (
      <div className={classes.root}>
        <Paper className={classes.card}>
          {/* Sections */}
          <CardContent className={classes.sectionHolder}>
            <Typography component="div" className={classes.contentHolder}>
              <Grid
                container
                spacing={3}
                direction="column"
                wrap="nowrap"
                justify="flex-start"
                className={classes.mainContainer}
              >
                {content}
              </Grid>
            </Typography>
          </CardContent>
        </Paper>
      </div>
    );
  }
}

LayoutList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LayoutList);
