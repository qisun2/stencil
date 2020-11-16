import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = {
  card: {
    maxWidth: 1100
  },
  featureHeatmap: {
    width: 250
  },
  mainContainer: {
    overflow: "scroll"
  },
  sectionTitle: {
    fontSize: 18
  },
  internalHeatmap: {
    width: 230
  }
};

class ImageArray extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.card}>
        {/* Header */}
        <Typography
          variant="overline"
          component="h5"
          gutterBottom
          className={classes.sectionTitle}
        >
          {this.props.title}
        </Typography>

        <Paper>
          <CardContent className={classes.sectionHolder}>
            <Grid
              container
              spacing={2}
              direction="row"
              wrap="nowrap"
              justify="flex-start"
              className={classes.mainContainer}
            >
              {
                this.props.data.map(item => {
                  return (
                    <Grid item>
                    <img src={item.URL} alt={item.plotTitle} title={item.plotTitle} />
                    </Grid>
                  );
                })
              }

              {/* Stacked Heatmap */}
            </Grid>
          </CardContent>
        </Paper>
      </div>
    );
  }
}

ImageArray.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageArray);
